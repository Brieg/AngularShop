import { Component, OnInit } from "@angular/core";

import { PageEvent } from "@angular/material/paginator";

import { IProduct } from "../interfaces/product";
import { ProductService } from "../services/product/product.service";
import { MatListOption, MatSelectionListChange } from "@angular/material/list";


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {



  // Pagination
  pageLength: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [this.pageSize, this.pageSize + 4];
  pageEvent: PageEvent | undefined

  // Products
  products: IProduct[] = [];
  paginationProduct: IProduct[] = [];

  public selectedCategory: string = "";
  public productsCategory: String[] = [];
  filteredProduct: IProduct[] = []

  constructor(
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.displayProducts(this.products)
      this.setFiltersCategory(this.products);
    })
  }

  displayProducts(products: IProduct[]) {
    this.pageLength = products.length;
    this.paginationProduct = products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
  }

  OnPaginate(event:PageEvent) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.paginationProduct = this.products.slice(offset).slice(0, event.pageSize);
  }

  setFiltersCategory(products:IProduct[]) {
    this.productsCategory = [...new Set(products.map(product => product.category))];
  }

  selectionChange(e: MatSelectionListChange) {
    this.filteredProduct = this.products.filter(x => {
      return x.category === e.options[0].value; });
    this.displayProducts(this.filteredProduct)
  }

}
