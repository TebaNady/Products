import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../app/shared/interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  apiURL = "https://dummyjson.com/products";
  constructor(private http: HttpClient) { 
    const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
  }

  getAllProducts() {
    return this.http.get(this.apiURL)
  }

  getProduct(id : number): Observable<Products> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Products>(url);
  }
  private cartItems: Array<any> = [];
  
  addToCart(item: any) {
    this.cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getCartItems() {
    return this.cartItems;
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
