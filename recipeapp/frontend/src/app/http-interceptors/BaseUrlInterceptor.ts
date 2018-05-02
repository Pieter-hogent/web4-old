import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BACKEND_URL } from '../../environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (BACKEND_URL) {
      console.log('entered');
      req = req.clone({
        url: `${BACKEND_URL}${req.url}`
      });
      console.log('set to ', `${BACKEND_URL}${req.url}`);
    }
    return next.handle(req);
  }
}
