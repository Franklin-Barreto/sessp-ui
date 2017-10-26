export class Menu {
  private _codigo: number;
  private _titulo: string;
  private _url: string;
  private _subMenus: Array<SubMenu>;

  get codigo(): number {
    return this._codigo;
  }

  get titulo(): string {
    return this._titulo;
  }

  get url(): string {
    return this._url;
  }

  get subMenus(): Array<SubMenu> {
    return this._subMenus;
  }

}

export class SubMenu {
  private _titulo: string;
  private _url: string;

  get titulo(): string {
    return this._titulo;
  }

  get url(): string {
    return this._url;
  }

}
