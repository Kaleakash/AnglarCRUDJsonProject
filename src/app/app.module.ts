import { EditBookDetailsComponent } from './editBook/app.bookeditcomponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ListBookDetailsComponent } from './listBooks/app.booklistcomponent';
import { AddBookComponent } from './addBook/app.addbookcomponent';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from './service/app.bookservice';
import { sharedBookService } from './service/app.sharedBookService';

const bookRoutes : Routes = [
  {path:'',redirectTo:'listAllBooks',pathMatch:'full'},
  {path:'listAllBooks',component:ListBookDetailsComponent},
  {path:'addBook',component:AddBookComponent},
  {path:"editBook/:id",component:EditBookDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListBookDetailsComponent,
    AddBookComponent,
    EditBookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(bookRoutes),
  ],
  providers: [BookService,sharedBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
