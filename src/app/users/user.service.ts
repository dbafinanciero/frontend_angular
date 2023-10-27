/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}*/


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8000/api/usuarios/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
   return this.httpClient.get<User[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(user: User): Observable<User> {
   return this.httpClient.post<User>(this.apiURL, JSON.stringify(user), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:String): Observable<User> {
   return this.httpClient.get<User>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:string, user:User): Observable<User> {
   return this.httpClient.put<User>(this.apiURL + id, JSON.stringify(user), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:string){
   return this.httpClient.delete<User>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error: Error) {
   let errorMessage = '';
   if(error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
