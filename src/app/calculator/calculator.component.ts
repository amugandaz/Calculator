import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstNumberValue = 0;
  secondNumberValue = 0;
  resultValue = 0;
  
  additionOperation(value1: string, value2:string): void {
    this.firstNumberValue = Number(value1);
    this.secondNumberValue = Number(value2);
    
    this.resultValue = this.firstNumberValue + this.secondNumberValue;
  }

  soustractionOperation(value1: string, value2:string): void {
    this.firstNumberValue = Number(value1);
    this.secondNumberValue = Number(value2);
  
    this.resultValue = this.firstNumberValue - this.secondNumberValue;
  }

  multiplicationOperation(value1: string, value2:string): void {
    this.firstNumberValue = Number(value1);
    this.secondNumberValue = Number(value2);
    
    this.resultValue = this.firstNumberValue * this.secondNumberValue;
  }

  divisionOperation(value1: string, value2:string): void {
    this.firstNumberValue = Number(value1);
    this.secondNumberValue = Number(value2);
   
    this.resultValue = this.firstNumberValue / this.secondNumberValue;
  }
}
