import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),

    HomeModule,
    BooksModule,
  ],
})
export class AppModule {}
