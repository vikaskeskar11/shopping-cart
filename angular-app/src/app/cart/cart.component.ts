import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { CartService } from '../services/cart-service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _cartService: CartService, public appService: AppService) { }

  ngOnInit(): void {
    this.get()
  }

  removeFromCart(product: any) {
    this._cartService.remove({
      productId: product.product._id
    }).subscribe(response => {
      alert(response.msg)
      this.get();
    })
  }

  get() {
    this.appService.getProducts();
  }

  getCartTotal() {
    return this.appService
      .cartProducts
      .map((a: any) => a.product.price)
      .reduce((a: any, b: any) => a + b, 0)
  }
}
