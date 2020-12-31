import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { CartService } from '../services/cart-service/cart-service.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any = [];
  constructor(private _productService: ProductService, private _cartService: CartService, public appService: AppService) { }

  ngOnInit(): void {
    this._productService.getAll().subscribe((response) => {
      this.products = response.products
    })
  }

  addToCart(product: any) {
    // TODO: Check if add count exceeds the remainingQuantity of product
    this._cartService.add({ productId: product._id }).subscribe((response) => {
      alert(response.msg)
      this.appService.getProducts();
    })
  }

}
