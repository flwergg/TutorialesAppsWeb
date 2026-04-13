import { Book } from './book.entity';
export declare class Review {
    id: number;
    book: Book;
    bookId: number;
    rating: number;
    comment: string;
    author: string | null;
    createdAt: Date;
}
