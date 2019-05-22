import { BookService } from './app.bookservice';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../app.books';


@Injectable()
export class sharedBookService {

  constructor(public bookService:BookService){
    this.bookService.getBookDetails().subscribe(data=>this.bookDataSource.next(data));
  }
  bookDataSource: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  bookData = this.bookDataSource.asObservable();

addBook(book:Book){
      const currentValue = this.bookDataSource.value;
        const updatedValue = [...currentValue, book];
        this.bookDataSource.next(updatedValue);
}
getBook():Observable<Book[]> {
  return this.bookData;
}

getBookInfo(bookId):Book{
  let fakeBook;
   let obj =  this.bookDataSource.getValue();
      obj.forEach(data=>{
        if(data.bookId==bookId){
          fakeBook = data;
        }
      })
      return fakeBook;
 }

 updateUserData(dataObj:Book):void {
  //this.bookDataSource.next({...this.bookDataSource.value, ...data});
  let fakeBook;
   let obj =  this.bookDataSource.getValue();
      obj.forEach(data=>{
        if(data.bookId==dataObj.bookId){
          data.bookName= dataObj.bookName;
          data.bookCost= dataObj.bookCost;
          data.author= dataObj.author;
        }
      })
      return fakeBook;
}

}
