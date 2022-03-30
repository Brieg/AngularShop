import { Component, OnInit } from "@angular/core";

import { PageEvent } from "@angular/material/paginator";
import { IProduct } from "../interfaces/product";
import { ProductService } from "../services/product/product.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {

  // Pagination
  length: number = 30;
  pageSize: number = 3;
  pageSizeOptions: number[] = [this.pageSize, this.pageSize * 2];

  // MatPaginator Output
  pageEvent: PageEvent | undefined;
  products: Observable<IProduct[]> | null = null;

  constructor(
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.callApi()
  }

}
