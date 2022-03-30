import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, BehaviorSubject } from "rxjs";

import { IProduct } from "../../interfaces/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  callApi(): Observable<any> {
    return this.httpClient.get('https://product-api2.herokuapp.com/api/v1/products')
  }

  private url = "https://jsonplaceholder.typicode.com/todos";

  getList(): Promise<any> {
    const url = `${this.url}`;
    return this.httpClient.get(url)
      .toPromise()
      .catch(this.handleError);
  }
  // handler for error in URL
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
