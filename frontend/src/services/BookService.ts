import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookstore';
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js';

export class BookService {
  static getBooks(): BookInterface[] {
    return useBookStore().books;
  }

  static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }

  static createBook(book: CreateBookDTO): void {
    const id =
      useBookStore().books.length > 0 ? Math.max(...useBookStore().books.map((b) => b.id)) + 1 : 1;
    useBookStore().books.push({ id, ...book });
  }

  static deleteLastBook(): void {
    useBookStore().books.pop();
  }

  static filterByCategory(category: string) {
    const books = useBookStore().books;
    return category ? books.filter((book) => book.category === category) : books;
  }

  static getCategories(): string[] {
    const store = useBookStore();
    return [...new Set(store.books.map((b) => b.category))];
  }
}
