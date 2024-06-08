import { Component } from '@angular/core';
import { MultiplesService } from '../services/multi.service';
import { Result } from '../interface/result.interface';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss']
})
export class MultiplesComponent {
  number: number = 0;
  multiples: { value: number, color: string }[] = [];

  constructor(private multiplesService:MultiplesService){}

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
    this.saveResult();
  }
  async saveResult(){
    const multiplesValues = this.multiples.map(multiples => multiples.value);
    const result: Result ={
      peticion: this.number,
      result:multiplesValues
    };
    await this.multiplesService.saveData(result);
  }
}


