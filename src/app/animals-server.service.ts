import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './lista-animais/AnimalInterface';
import { ResponseUsers, Usuarios } from './lista-animais/InterfaceUsers';


@Injectable({
  providedIn: 'root'
})
export class AnimalsServerService {

  private apiUrl = 'http://localhost:3000/animals'

  private apiUrl2 = 'https://reqres.in/api/users'

  constructor(private Http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.Http.get<Animal[]>(this.apiUrl)

  }

  getall2(): Observable<ResponseUsers> {
    return this.Http.get<ResponseUsers>(this.apiUrl2);


  }
}
