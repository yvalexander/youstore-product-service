import ProductRepository from "../../infra/repository/productRepository"
import log from "../../interface/http/utils/logger"

class GetCategory{
    productRepository: ProductRepository
    logger: typeof log
    constructor({productRepository, logger}: {productRepository: ProductRepository, logger: typeof log}) {
        this.productRepository = productRepository
        this.logger = logger
    }

    async execute( payload: any) {
        try {
           const Products =  await this.productRepository.getCategory( payload)
           return Products
        } catch (error) {
            throw error
        }
    }
}

export default GetCategory