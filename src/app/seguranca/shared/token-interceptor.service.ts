import {Injectable, Injector} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {AuthService} from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let auth = this.injector.get(AuthService);
    if ( !auth.isAccessTokenInvalid()) {
      request = request.clone({setHeaders: {Authorization: `Bearer ${auth.obterToken()}`}});
    }
    return next.handle(request);
  }
}
