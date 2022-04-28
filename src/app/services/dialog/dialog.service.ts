import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { IProduct } from "../../interfaces/product";

@Injectable({
  providedIn: "root"
})

export class DialogService {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<unknown>) {
  }

  openDialog(component: any, dialogData: IProduct[]): void {
    this.dialogRef = this.dialog.open(component, {
      width: "350px",
      data: dialogData
    });
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

}
