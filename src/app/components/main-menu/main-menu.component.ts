import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { IProduct } from "../../interfaces/product";
import { CartService } from "../../services/cart/cart.service";
import { CartDialogComponent } from "../cart-dialog/cart-dialog.component";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"],
  providers: [CartDialogComponent]
})

export class MainMenuComponent implements OnInit {

  productsInCarts: IProduct[] = [];
  cartCount$: Observable<IProduct[]>;
  pathSVG = "./../assets/logoSii.svg";
  altLogo = "BRIEG Shop";

  constructor(
    private cartService: CartService,
    // private dialogService: DialogService,
    private cartDialogComponent: CartDialogComponent) {
  }

  ngOnInit(): void {
    this.cartCount$ = this.cartService.getItems();
    this.productsInCarts = this.cartService.getSelectedProducts();
  }

  openDialog(): void {
    this.cartDialogComponent.openDialog(this.productsInCarts);
  }
}
