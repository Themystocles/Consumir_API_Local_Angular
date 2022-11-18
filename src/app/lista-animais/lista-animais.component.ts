import { Component, OnInit } from '@angular/core';
import { AnimalsServerService } from '../animals-server.service';
import { Animal } from './AnimalInterface';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {
  animais: Animal[] = []



  constructor(public AnimalsServer: AnimalsServerService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }
  getAnimals(): void {

    this.AnimalsServer.getAll().subscribe(a => this.animais = a)
  }

}
