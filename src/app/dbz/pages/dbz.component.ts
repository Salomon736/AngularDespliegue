import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-app-dbz',
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.scss'
})
export class DbzComponent {
  constructor(private dbzService:DbzService) {}

  get heroes(): Character[] {
    return [...this.dbzService.heroes];
  }

  onDeleteHeroes(id:string): void {
    this.dbzService.eliminarId(id);
  }

  verNewHeroe(heroe:Character):void {
    this.dbzService.addNewHeroe(heroe);
  }
}
