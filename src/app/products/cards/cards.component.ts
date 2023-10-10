import { Component } from '@angular/core';
import { Products } from '../../shared/interfaces/products';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { GetProductsService } from 'src/app/get-products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  products !: Array<Products>
  idActive !: number 
  selectedProduct !: Products
  constructor(config: NgbRatingConfig, private service: GetProductsService, private activeRouter: ActivatedRoute) {
		config.max = 5;
		config.readonly = true;
	}
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
}