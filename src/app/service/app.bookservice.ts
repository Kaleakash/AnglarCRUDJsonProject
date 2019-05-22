import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Book } from '../app.books';


@Injectable()
export class BookService{

    url:string = "/assets/books.json";
    bookList : Book[] = [];

    constructor(private http:HttpClient){
    }

    getBookDetails(){
        return this.http.get<Book[]>(this.url);
    }

}