import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() public characterList: Character[]=[]

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  emitDeleteId(id?: string): void{
    if(!id) return;
    console.log({id});
    this.onDeleteId.emit(id);
  }
}
