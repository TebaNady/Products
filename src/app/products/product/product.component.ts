import { Component } from '@angular/core';
import { Products } from '../../shared/interfaces/products';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductsService } from 'src/app/get-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  idActive !: number 
  selectedProduct !: Products
  constructor(private router: Router, private service : GetProductsService, private activeRouter: ActivatedRoute){}
  ngOnInit(){
    this.idActive = +this.activeRouter.snapshot.params['id'];
    this.service.getProduct(this.idActive).subscribe(
      (product) => {
        this.selectedProduct = product;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
    this.getProducts()
  }
  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.selectedProduct = res.products;
      })
  }
  goToProduct(id : number){
    this.router.navigate(['productDetails',id])
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
  addToCart(product: Products) {
    this.service.addToCart(product);
  }
}
