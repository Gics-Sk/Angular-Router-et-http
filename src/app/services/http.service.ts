import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
private apiUrl = 'https://api.github.com/users';
  constructor( private http : HttpClient) { }
  // Methode pour recuperer tout les utilisateurs
  getUsers():Observable<any>{
return this.http.get(this.apiUrl);
  }
}
