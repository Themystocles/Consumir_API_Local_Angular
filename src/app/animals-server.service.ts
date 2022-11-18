import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './lista-animais/AnimalInterface';


@Injectable({
  providedIn: 'root'
})
export class AnimalsServerService {

  private apiUrl = 'http://localhost:3000/animals'

  constructor(private Http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.Http.get<Animal[]>(this.apiUrl)

  }
}
