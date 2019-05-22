import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { sharedBookService } from '../service/app.sharedBookService';

@Component({
    selector : 'edit-root',
    templateUrl : './app.bookeditcomponent.html'
})

export class EditBookDetailsComponent {

  angForm: FormGroup;
  bId:number;
  constructor(private fb: FormBuilder,private router: Router,
    private sharedBookService:sharedBookService,public activateRoute:ActivatedRoute) {
      this.createForm();
    this.activateRoute.params.subscribe(data=>
      {this.bId=data.id;
        this.angForm.get("bookId").setValue(this.bId);
        let book = this.sharedBookService.getBookInfo(this.bId);
        console.log("Books "+book)
        this.angForm.get("bookName").setValue(book.bookName);
        this.angForm.get("bookCost").setValue(book.bookCost);
        this.angForm.get("author").setValue(book.author);
      });
  }
  createForm() {
    this.angForm = this.fb.group({
      bookId: ['', Validators.required ],
      bookName: ['', Validators.required ],
      bookCost: ['', Validators.required ],
      author: ['', Validators.required ],
    });
  }

  updateBook(data:any) {
    this.sharedBookService.updateUserData(data);
     this.router.navigate(['listAllBooks']);
}
}
