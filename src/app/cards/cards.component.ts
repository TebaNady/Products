import { Component } from '@angular/core';
import productsData from '../../assets/products-list.json'
import { Products } from '../interfaces/products';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(config: NgbRatingConfig) {
		config.max = 5;
		config.readonly = true;
	}
  products : Array<Products> = productsData;
}
