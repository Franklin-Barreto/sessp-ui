import {Component, OnInit} from '@angular/core';
import {MenuService, Menu} from "./shared";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  menus: Array<Menu>;

  constructor(private menuService: MenuService) {
    this.menuService.getMenu()
      .subscribe(menus => {
        this.menus = menus;
      })
  }

  ngOnInit() {
  }

}
