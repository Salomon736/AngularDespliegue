import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
console.log(uuid())
@Injectable({providedIn: 'root'})
export class DbzService {
  public heroes:Character[]= [{
    id: uuid(),
    name: 'KRILIN',
    power: 1000
  },
  {
    id: uuid(),
    name: 'GOKU',
    power: 9000
  },
  {
    id: uuid(),
    name: 'VEGUETA',
    power: 8000
  }];

  addNewHeroe(heroe:Character): void {
    const newHeroes: Character = { id: uuid(), ...heroe}
    this.heroes.push(newHeroes);
  }

  // eliminarId(id:number): void {
  //   this.heroes.splice(id,1);
  // }
  eliminarId(id:string): void {
    this.heroes=this.heroes.filter(heroe => heroe.id !== id);
  }
}
