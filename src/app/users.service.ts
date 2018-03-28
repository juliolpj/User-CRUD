import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { User } from './user'

const cudOptions = { headers: new HttpHeaders ({ 'Content-Type': 'aplication/json'})};

@Injectable()
export class UsersService {
  private usersUrl: string = '/api/users';
  constructor(private http: HttpClient) { 
  }

  getUsers(): Observable<User[]>{ 
    return this.http.get<User[]>(this.usersUrl).
      catch(this.handleError);
  }

  getUser(id: string | number):Observable<User> {
    const url =`${this.usersUrl}/${id}`;
    return this.http.get(url)
      .catch(this.handleError);
  }

  addUser(user: User): Observable<User> {
    const newUser = Object.assign( {}, user);
    return this.http.post<User>(this.usersUrl, newUser, cudOptions)
      .catch(this.handleError);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(this.usersUrl, user, cudOptions)
      .catch(this.handleError);
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, cudOptions)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
