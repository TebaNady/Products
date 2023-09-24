import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CardsComponent,
    ProductComponent,
    CartComponent,
    CardBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports :[
    CardsComponent,
    ProductComponent,
    CartComponent,
    CardBodyComponent
  ]
})
export class ProductsModule { }
