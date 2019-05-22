import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/app.bookservice';
import { Book } from '../app.books';
import { Router } from '@angular/router';
import { sharedBookService } from '../service/app.sharedBookService';

@Component({
    selector : 'list-root',
    templateUrl : './app.booklistcomponent.html',
    //providers : [BookService, sharedBookService]
})

export class ListBookDetailsComponent {

    bookList : Book[] = [];

    constructor(public bookService: BookService,
      public router:Router,
        public sharedBookService:sharedBookService){

    }

    ngOnInit(): void {
      this.sharedBookService.getBook().subscribe(data => this.bookList = data);
    }

    delete(bookId:number){

       var retVal = confirm("Are you sure you want to delete?");
       if( retVal == true ) {
       this.bookList.splice(bookId,1);
       //alert('Book got deleted sucessfully...');
           return true;
       } else
            return false;
    }
    edit(bookId){
          console.log(bookId);
          this.router.navigate(["editBook",bookId])
    }
}
