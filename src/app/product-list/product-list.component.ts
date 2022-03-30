import { Component, OnInit, ViewChild } from "@angular/core";

import { PageEvent } from "@angular/material/paginator";
import { ProductFilterComponent } from "../product-filter/product-filter.component";
import { IProduct } from "../interfaces/product";
import { ProductService } from "../services/product/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  providers: [ProductService, ProductFilterComponent]
})
export class ProductListComponent implements OnInit {

  @ViewChild(ProductFilterComponent) child:ProductFilterComponent;

  // Pagination
  pageLength: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [this.pageSize, this.pageSize + 4];
  pageEvent: PageEvent | undefined

  // Products
  products: IProduct[] = [];
  paginationProduct: IProduct[] = [];
  productsCategory: String[] = [];

  constructor(
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.pageLength = products.length;
      this.child.getCategory(this.products)
      this.paginationProduct = products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
    })
  }

  OnPaginate(event:PageEvent) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.paginationProduct = this.products.slice(offset).slice(0, event.pageSize);
  }

}
