
import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <H4>Mi contador: {{ counter }}</H4>

  <button (click)="increaseBy(+1)"> + 1 </button>
  <button (click)="resetCounter()"> Reset </button>
  <button (click)="increaseBy(-1)"> - 1 </button>
  `
})

export class CounterComponent {
  public counter: number = 10;

increaseBy(valor: number): void{
    this.counter += valor;
};

resetCounter():void{
  this.counter = 10
}

}
