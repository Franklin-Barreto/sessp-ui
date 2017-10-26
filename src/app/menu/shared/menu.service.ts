import {Injectable} from '@angular/core';
import {BaseService} from "../../utils/base.service";
import {Observable} from "rxjs/Observable";
import {Menu} from "./menu";

@Injectable()
export class MenuService extends BaseService {


  getMenu(): Observable<Array<Menu>> {
    return this.httpGet("menu").map(resp => {
      return resp.json()
    })
  }

}
