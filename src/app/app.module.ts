import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";

import { MainMenuComponent, DialogOverviewExampleDialog } from "./components/main-menu/main-menu.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductPageComponent } from "./components/product-page/product-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    DialogOverviewExampleDialog,
    ProductListComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
