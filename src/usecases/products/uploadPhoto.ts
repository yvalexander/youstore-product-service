import ProductRepository from "../../infra/repository/productRepository"
import ProductModel from "../../infra/database/models/mongoose/product"
import log from "../../interface/http/utils/logger"
const cloudinary = require('../../infra/libs/cloudinary')
const fs = require('fs')


class UploadPhoto{
    productRepository: ProductRepository
    logger: typeof log
    productModel: typeof ProductModel
    constructor({productRepository, logger, productModel}: {productRepository: ProductRepository, productModel: typeof ProductModel, logger: typeof log}) {
        this.productRepository = productRepository
        this.logger = logger
        this.productModel = productModel
    }

    async execute(payload: any, productId: String) {
        try {
            
            const uploader = async (path: String) => await cloudinary.uploads(path , 'youstore-product-photos')
            const url = []
            const file = payload

            const {path} = file
            const newPath = await uploader(path)


            url.push(newPath.url)
        
            fs.unlinkSync(path)

            const product = await ProductModel.findById(productId)

            product!.images = url.toString()

            await product?.save()

            return product
          
        } catch (error) {
            throw error
        }
     }
}

export default UploadPhoto