import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';

import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';
import { PizzaComponent } from './pizza/pizza.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
 //   UserComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    TestComponent,
    ProductComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
