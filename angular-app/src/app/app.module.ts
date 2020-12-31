import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http-service/http.service';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product-service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart-service/cart-service.service';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    ProductService,
    CartService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
