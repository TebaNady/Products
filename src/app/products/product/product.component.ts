import { Component } from '@angular/core';
import { Products } from '../../shared/interfaces/products';
import productsData from '../../../assets/products-list.json'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products : Array<Products> = productsData;
  idActive !: number 
  selectedProduct !: Products
  constructor(private activeRouter : ActivatedRoute){}
  ngOnInit(){
    this.idActive = this.activeRouter.snapshot.params['id'];
    this.selectedProduct = this.products.find((product)=> product.id === +this.idActive) as Products
  }
  showCat = false;
  showBrd = false;

  toggleCatDiv() {
    this.showCat = !this.showCat;
  }
  toggleBrdDiv() {
    this.showBrd = !this.showBrd;
  }
  
  quantity: number = 0;

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }
  
}
