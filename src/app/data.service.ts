import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

export class User {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  phone: number | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:2000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getUsers(): Observable<User> {
    return this.httpClient.get<User>(this.endPoint + '/api/getuserdetail');
  }
}