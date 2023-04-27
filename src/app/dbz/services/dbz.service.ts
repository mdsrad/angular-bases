import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class dbzService {

  constructor() {}

  public characters: Character[] = [
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id:uuid(),
      name:'Goku',
       power:9500
    },
    {
      id:uuid(),
      name:'Vegeta',
       power:7500
    }
  ];

  addCharacter(character:Character){
    // COGE TODAS LAS PROPIEDADES QUE TIENE EL OBJETO Y APLICALAS
    const newCharacter: Character = { ...character,  id:uuid()}
    this.characters.push(newCharacter)
  }
  /* onDeleteCharacter(indice:number){
    this.characters.splice(indice, 1);
  } */

  deleteCharacterById( id:string ):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }


}

