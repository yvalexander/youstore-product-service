import CategoryRepository from "../../infra/repository/categoryRepository"
import log from "../../interface/http/utils/logger"


class DeleteCategory{
    categoryRepository: CategoryRepository
    logger: typeof log
    constructor({categoryRepository, logger}: {categoryRepository: CategoryRepository, logger: typeof log}) {
        this.categoryRepository = categoryRepository
        this.logger = logger
        
    }
    async execute(categoryId: string) {
        try {
            const category = await this.categoryRepository.delete(categoryId)
            return category
        } catch (error) {
            this.logger.error(error)
        }
    }
}

export default DeleteCategory