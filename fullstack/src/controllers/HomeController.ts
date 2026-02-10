import type { Request, Response } from 'express';
import { books } from '../data/books.js';
import { Book } from '../models/Book.js';

export class HomeController {
  static index(req: Request, res: Response): void {
    res.render('home/index', { viewData: { title: 'Home' } });
  }

  static about(req: Request, res: Response): void {
    res.render('home/about', { viewData: { title: 'About' } });
  }

  static contact(req: Request, res: Response): void {
    res.render('home/contact', { viewData: { title: 'Contact' } });
  }

  static books(req: Request, res: Response): void {
    res.render('home/books', {
      viewData: { title: 'Books' },
      books
    });
  }

  static show(req: Request, res: Response): void {
    const book = Book.findById(books, Number(req.params.id));

    if (!book) {
      res.status(404).send('Book not found');
      return;
    }

    res.render('home/show', {
      viewData: { title: book.title },
      book
    });
  }
}
