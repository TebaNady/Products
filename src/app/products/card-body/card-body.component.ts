import { Component, Input } from '@angular/core';
import { Products } from '../../shared/interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent {
  @Input() product !: Products
  constructor(private router : Router){}
  goToProduct(id : number){
    this.router.navigate(['productDetails',id])
  }
}
