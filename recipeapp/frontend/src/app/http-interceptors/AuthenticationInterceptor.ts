import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../user/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.token.length) {
      // Clone the request to add the new header
      const clonedRequest = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${this.authService.token}`
        )
      });
      //   // Clone the request and set the new header in one step.
      //   const authReq = req.clone({
      //     setHeaders: { Authorization: `Bearer ${this.authService.token}` }
      //   });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
