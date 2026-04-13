import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | null>;
    create(createBookDto: CreateBookDto): Promise<Book>;
}
