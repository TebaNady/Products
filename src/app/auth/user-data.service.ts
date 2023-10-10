import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private dataUrl = '/assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  addUser(user: any): Observable<any> {
    return this.getUsers().pipe(
      map((users) => {
        users.push(user); 
        return users; //
      }),
      map((updatedUsers) => this.http.put(this.dataUrl, updatedUsers))
    );
  }
}
