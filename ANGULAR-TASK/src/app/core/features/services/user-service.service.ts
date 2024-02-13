import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  /**
   * API call to fetch user details
   * @returns Returns user details
   */
  getUserInfo(): Observable<any>{
    return this.http.get('http://localhost:3000/users/findAll');
  }
 
  /**
   * API call to delete user todo details
   */
   deleteToDoInfo(id: number): Observable<any>{
    return this.http.delete('http://localhost:3000/users/delete/'+id);
  }

  /**
   * API call to create new
   * @returns Returns user details
   */
   createNewtoDo(toDobodyData: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/users/create/',toDobodyData) ;
  }

  /**
   * API call to fetch user details
   * @returns Returns user details
   */
   ediToDo(toDobodyData: any): Observable<any>{
    return this.http.put('http://localhost:3000/users/update/'+toDobodyData.key,toDobodyData) ;
  }
}
