import { Component, OnInit } from '@angular/core';
import { AnimalsServerService } from '../animals-server.service';
import { Animal } from './AnimalInterface';
import { ResponseUsers, Usuarios } from './InterfaceUsers';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {
  animais: Animal[] = []
  users?: ResponseUsers



  constructor(public AnimalsServer: AnimalsServerService) {
    this.getAnimals(),
      this.getUsers()
  }

  ngOnInit(): void {
  }
  getAnimals(): void {

    this.AnimalsServer.getAll().subscribe(a => this.animais = a)
  }

  getUsers(): void {
    this.AnimalsServer.getall2().subscribe(u => this.users = u)

  }

}
