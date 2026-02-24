import { BookService } from './BookService'

export default class OtherService {
  static getUniqueBookCategories(): string[] {
    const books = BookService.getBooks()
    const categories = books.map(b => b.category)
    return [...new Set(categories)]
  }
}