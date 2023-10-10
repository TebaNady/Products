import { Component } from '@angular/core';
import { GetProductsService } from 'src/app/get-products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private service: GetProductsService) {}

  get cartItems() {
    return this.service.getCartItems();
  }

  removeItem(index: number) {
    this.service.removeFromCart(index);
  }

  get cartTotal() {
    return this.service.calculateTotal();
  }
}