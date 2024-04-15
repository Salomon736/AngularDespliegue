import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.scss'
})
export class AddPersonajeComponent {

  @Output()
  public onNewHerore : EventEmitter<Character> = new EventEmitter();

  public heroe:Character ={
    name: '',
    power: 0
  };
  emitHeroe():void{
    console.log(this.heroe);

    if (this.heroe.name.length === 0) return;

    this.onNewHerore.emit(this.heroe);
    this.heroe = {name: '', power: 0};

  }
}
