import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
