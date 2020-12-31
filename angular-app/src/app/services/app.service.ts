import { Injectable } from "@angular/core";
import { CartService } from "./cart-service/cart-service.service";

@Injectable()
export class AppService {
    cartProducts = []
    constructor(private _cartService: CartService) {

    }
    getProducts() {
        this._cartService.get().subscribe(response => {
            this.cartProducts = response.products
        })
    }
}