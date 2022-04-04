import { Component, Inject, OnInit, Output } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";

import { IProduct } from "../../interfaces/product";
import { CartService } from "../../services/cart/cart.service";
import { Observable } from "rxjs";

export interface DialogData {
  products: IProduct[];
}

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"]
})

export class MainMenuComponent implements OnInit {

  productsInCarts: IProduct[] = [];

  constructor(
    private dialog: MatDialog,
    private cartService: CartService) {
  }

  cartCount$: Observable<IProduct[]>;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "350px",
      data: { products: this.cartService.getSelectedProducts() }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.cartCount$ = this.cartService.getItems();
  }

  clearCartData() {
    this.cartService.clearCart();
  }

  pathSVG = "./../assets/logoSii.svg";
  altLogo = "Sii Shop";
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "./cart-dialog.component.html",
  providers: [MainMenuComponent]
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private mainMenu: MainMenuComponent,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  clearData() {
    this.closeDialog();
    this.mainMenu.clearCartData();
  }
}

