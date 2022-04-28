import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { IProduct } from "../../interfaces/product";
import { DialogService } from "../../services/dialog/dialog.service";
import { CartService } from "../../services/cart/cart.service";

@Component({
  selector: "app-cart-dialog",
  templateUrl: "./cart-dialog.component.html",
  styleUrls: ["./cart-dialog.component.sass"],
  providers: [
    DialogService,
  ]
})
export class CartDialogComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public dialogData: IProduct[],
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
  }

  openDialog(data: IProduct[]): void {
   this.dialogService.openDialog(CartDialogComponent, data);
  }

  closeDialog(): void {
    this.dialogService.closeDialog();
  }

  clearCartData() {
    this.closeDialog();
    this.cartService.clearCart();
  }

}
