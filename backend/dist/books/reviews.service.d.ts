import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsService {
    private reviewsRepository;
    constructor(reviewsRepository: Repository<Review>);
    findAll(): Promise<Review[]>;
    findByBookId(bookId: number): Promise<Review[]>;
    create(createReviewDto: CreateReviewDto): Promise<Review>;
}
