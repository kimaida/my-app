import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducsModule } from './products/products.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: 'detail', component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProducsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
