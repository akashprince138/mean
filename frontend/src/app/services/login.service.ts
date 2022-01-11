import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../model/login.model';
import {environment} from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<Login>;
    public currentUser: Observable<Login>;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }

  login(data): Observable<Login> {
    return this.http.post<any>(`${environment.apiUrl}/login`, data, this.httpOptions)
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('token', user.token);
                this.currentUserSubject.next(user);
                return user;
            }));
  }

  public get currentUserValue(): Login {
        return this.currentUserSubject.value;
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }
}
