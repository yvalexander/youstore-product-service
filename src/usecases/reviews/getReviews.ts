import { response } from "express"
import { request } from "http"
import ReviewRepository from "../../infra/repository/reviewRespository"
import log from "../../interface/http/utils/logger"

class GetReviews{
    reviewRepository: ReviewRepository
    logger: typeof log
    constructor({reviewRepository, logger}: {reviewRepository: ReviewRepository, logger: typeof log}) {
        this.reviewRepository = reviewRepository
        this.logger = logger
    }

    async execute(payload: object) {
        try {
           const reviews =  await this.reviewRepository.getAll(payload)
           return reviews
        } catch (error) {
            throw error
        }
    }
}

export default GetReviews


