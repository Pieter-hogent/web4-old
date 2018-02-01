import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private _url = '/API/users';
  private _user$: BehaviorSubject<string>;

  public redirectUrl: string;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(
      currentUser && currentUser.username
    );
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    return !!localCurrentUser ? localCurrentUser.token : '';
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, { username, password }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(
            'currentUser',
            JSON.stringify({ username: username, token: token })
          );
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }

  register(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/register`, { username, password }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(
            'currentUser',
            JSON.stringify({ username: username, token: res.token })
          );
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username }).pipe(
      map((item: any) => {
        if (item.username === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
