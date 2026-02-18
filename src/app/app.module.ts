import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TodoComponent } from './component/todo/todo.component';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { ProductCardComponentComponent } from './component/product-card-component/product-card-component.component';
import { UserComponent } from './component/user/user.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { RegisterComponent } from './component/register/register.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoComponent,
    ChildComponent,
    ParentComponent,
    ProductCardComponentComponent,
    UserComponent,
    CartSummaryComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    RegisterComponent,
    UserlistComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
