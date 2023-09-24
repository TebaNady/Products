import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './products/cards/cards.component';
import { ProductComponent } from './products/product/product.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './products/cart/cart.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

const routes: Routes = [
  {
    path : "",
    component : CardsComponent
  },
  {
    path : "productDetails/:id",
    component : ProductComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "cart",
    component : CartComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
