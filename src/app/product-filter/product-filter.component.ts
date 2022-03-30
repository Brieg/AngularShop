import { Component, OnInit } from '@angular/core';
import { IProduct } from "../interfaces/product";

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.sass']
})
export class ProductFilterComponent implements OnInit {

  public productsCategory: String[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getCategory(products:IProduct[]) {
    this.productsCategory = [...new Set(products.map(product => product.category))];
    console.log(this.productsCategory)
  }

}
