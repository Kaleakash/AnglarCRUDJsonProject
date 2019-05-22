import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../service/app.bookservice';
import { Book } from '../app.books';
import { ListBookDetailsComponent } from '../listBooks/app.booklistcomponent';
import { sharedBookService } from '../service/app.sharedBookService';

@Component({
  selector: 'addbook-root',
  templateUrl: './app.addbookcomponent.html',
  //providers : [BookService]
})
export class AddBookComponent implements OnInit {



  angForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,
    private sharedBookService:sharedBookService) {
    this.createForm();
  }
ngOnInit() {

}
  createForm() {
    this.angForm = this.fb.group({
      bookId: ['', Validators.required ],
      bookName: ['', Validators.required ],
      bookCost: ['', Validators.required ],
      author: ['', Validators.required ],
    });

   // this.angForm.controls['bookId'].setValue(123);
   //this.angForm.patchValue({bookId: 100});
  }

  addBook(data:any) {
        this.sharedBookService.addBook(data);
         this.router.navigate(['listAllBooks']);
  }


}
