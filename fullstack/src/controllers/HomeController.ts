import type { Request, Response } from 'express';

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData = { title: 'Home' };
    res.render('home/index', { viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData = { title: 'About' };
    res.render('home/about', { viewData });
  }

  static contact(req: Request, res: Response): void {
    const viewData = { title: 'Contact' };
    res.render('home/contact', { viewData });
  }
}