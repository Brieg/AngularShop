import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductPageComponent } from "./product-page/product-page.component";

const routes: Routes = [
  { path: 'home', component: ProductListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'product/:productID', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
