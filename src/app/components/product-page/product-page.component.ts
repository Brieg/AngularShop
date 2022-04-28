import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IProduct } from "../../interfaces/product";
import { ProductService } from "../../services/product/product.service";
import { CartService } from "../../services/cart/cart.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
  providers: [ProductService]
})
export class ProductPageComponent implements OnInit {

  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productID"));

    this.productService.getProducts().subscribe(products => {
      this.product = products.find((x: { id: number; }) => x.id == productIdFromRoute);
    })
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
}
