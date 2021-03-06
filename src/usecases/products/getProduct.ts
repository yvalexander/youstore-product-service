import ProductRepository from "../../infra/repository/productRepository"
import log from "../../interface/http/utils/logger"



class GetProduct{
    productRepository: ProductRepository
    logger: typeof log
    constructor({productRepository, logger}: {productRepository: ProductRepository, logger: typeof log}) {
        this.productRepository = productRepository
        this.logger = logger
    }

    async execute(productId: string) {
        try {
            const product = await this.productRepository.get(productId)
            return product
        } catch (error) {
            throw error
        }
    }
}

export default GetProduct