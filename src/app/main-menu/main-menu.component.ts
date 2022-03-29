import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"],
})

@Input('logo')

export class MainMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  searchValue = '';
  pathSVG = './../assets/logoSii.svg';
  altLogo = 'Sii Shop';
}
