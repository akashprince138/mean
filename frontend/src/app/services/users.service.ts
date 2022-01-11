import { Injectable } from '@angular/core';
import { User} from '../model/users.model';
import {environment} from './../../environments/environment'
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  users(): Observable<User> {
    return this.http.get<any>(`${environment.apiUrl}/users`)
            .pipe(map(user => {
                return user;
            }));
  }

  addUser(data:any): Observable<User> {
    return this.http.post<any>(`${environment.apiUrl}/add-user`,data)
            .pipe(map(user => {
                return user;
            }));
  }

  getEditUser(id:any): Observable<User> {
   let token = localStorage.getItem("token");
    let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     'Authorization':  `Bearer ${token}`
    })
  };
    return this.http.get<any>(`${environment.apiUrl}/edit-user/${id}`, httpOptions)
            .pipe(map(user => {
                return user;
            }));
  }
  
  editUser(data:any,id): Observable<User> {
   let token = localStorage.getItem("token");
    let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     'Authorization':  `Bearer ${token}`
    })
  };
    return this.http.put<any>(`${environment.apiUrl}/edit-user/${id}`,data, httpOptions)
            .pipe(map(user => {
                return user;
            }));
  }

  deleteUser(id): Observable<User> {
   let token = localStorage.getItem("token");
    let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     'Authorization':  `Bearer ${token}`
    })
  };
    return this.http.delete<any>(`${environment.apiUrl}/delete-user/${id}`, httpOptions)
            .pipe(map(user => {
                return user;
            }));
  }
}
