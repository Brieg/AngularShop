import { Injectable } from "@angular/core";
import { IProduct } from "../../interfaces/product";
import { BehaviorSubject, map, of, take } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class CartService {

  private dialogDuration: number = 1000; // in ms

  private itemsSubject = new BehaviorSubject<IProduct[]>([]);
  private items$ = this.itemsSubject.asObservable();

  constructor(
    private _snackBar: MatSnackBar) {
    let existingCartItems = JSON.parse(<string>localStorage.getItem("products"));

    if (!existingCartItems) {
      existingCartItems = [];
    }

    this.itemsSubject.next(existingCartItems);
  }


  addToCart(product: IProduct) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        this._snackBar.open(product.name + " for " + product.price + " $ added to cart.", "X", {
          duration: this.dialogDuration
        });
      })
    ).subscribe();
  }

  getProducts() {
    return this.itemsSubject.getValue();
  }

  getSelectedProducts() {
    const products: IProduct[] = this.getProducts();

    return [...products.reduce((mapProducts, product) => {
      if (!mapProducts.has(product.id)) {
        mapProducts.set(product.id, { ...product, count: 0 });
      }
      mapProducts.get(product.id).count++;
      return mapProducts;
    }, new Map).values()];
  }

  getItems() {
    return this.items$;
  }

  clearCart() {
    this.itemsSubject.next([]);
    localStorage.clear();
    this._snackBar.open("Your cart is clear", "X", {
      duration: this.dialogDuration
    });
  }

}
