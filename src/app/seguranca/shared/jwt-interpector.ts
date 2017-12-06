/**
 * Created by fpbarreto on 01/12/2017.
 */
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import {
  HttpInterceptor, HttpRequest, HttpHandler,HttpResponse,
  HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent
} from "@angular/common/http";
import {Injector, Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {BehaviorSubject} from "rxjs";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private auth: AuthService;

  constructor(private injector: Injector) {
  }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {

    return req.clone({setHeaders: {Authorization: 'Bearer ' + token}})
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    this.auth = this.injector.get(AuthService);

    return next.handle(req)
      .catch(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 400:
              return this.handle400Error(error);
            case 401:
              return this.handle401Error(req, next);
          }
        } else {
          return Observable.throw(error);
        }
      });
  }

  handle400Error(error) {
    if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
      return this.logoutUser();
    }
    return Observable.throw(error);
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.tokenSubject.next(null);

      return this.auth.obterNovoToken()
        .switchMap((newToken: string) => {
          newToken = this.auth.obterToken();
          if (newToken) {
            this.tokenSubject.next(newToken);
            return next.handle(this.addToken(req, this.auth.obterToken()))
          }
          return this.logoutUser();
        })
        .catch(error => {
          return this.logoutUser();
        })
        .finally(() => {
          this.isRefreshingToken = false;
        });
    } else {
      console.log("Dentro do else");
      return this.tokenSubject
        .filter(token => token != null)
        .take(1)
        .switchMap(token => {
          return next.handle(this.addToken(req, token));
        });
    }
  }

  logoutUser() {
    return Observable.throw("");
  }
}
