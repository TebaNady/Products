import { Component, Input } from '@angular/core';
import { Products } from '../../shared/interfaces/products';
import { Router } from '@angular/router';
import { GetProductsService } from 'src/app/get-products.service';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent {
  @Input() product !: Products
  products !: Array<Products>
  constructor(private router : Router,private service: GetProductsService){}
  ngOnInit(){
    this.getProducts();
  }
  getProducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res.products;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  goToProduct(id : number){
    this.router.navigate(['productDetails',id])
  }
  addToCart(product: Products) {
    this.service.addToCart(product);
  }
}
