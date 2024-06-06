import { Component } from '@angular/core';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss']
})
export class MultiplesComponent {
  number: number = 0;
  multiples: { value: number, color: string }[] = [];

  findMultiples() {
    this.multiples = [];
    //ciclo del numero ingresado
    for (let i = 0; i <= this.number; i++) {
      let color = 'black';

      if (i % 3 === 0) color = 'green';
      if (i % 5 === 0 && (i % 3 !== 0)) color = 'red'; //mientras no sea multiplo de otro numero dara el color indicado
      if (i % 7 === 0 && (i % 3 !== 0) && (i % 5 !== 0)) color = 'blue';

      this.multiples.push({ value: i, color });
    }
  }
}


