import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { PageEvent } from "@angular/material/paginator";

export interface Product {
  name: String;
  price: String;
  category: String;
  img: String;
  description: String;
}

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {

  // Pagination
  length = 30; //gather full length from RXJS response
  pageSize = 3;
  pageSizeOptions: number[] = [this.pageSize, this.pageSize * 2];

  // MatPaginator Output
  pageEvent: PageEvent | undefined;
  products: Product[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.httpClient.get("https://product-api2.herokuapp.com/api/v1/products")
      .subscribe(products => {
        this.products = Object.values(products);

        if(this.products.length) {
          this.length = this.products.length;
        }
      });
  }


}
