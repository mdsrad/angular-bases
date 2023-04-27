import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name:'Truks',
      power: 10
    }]

    public character: Character = {
      name: '',
      power:0
    };

    onDeleteCharacter (id?: string){
      if (!id) return;
      console.log(id)
      this.onDelete.emit(id);
    }
}
