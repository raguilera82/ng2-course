import {Component} from '@angular/core'

import {CalculatorService} from './calculator.service'

@Component({
  selector: 'tnt-calc',
  template: `<div id="calc">
                <p>
                  Operando 1
                </p>
                <input type="number" name="op1" id="op1" #op1/>

                <p>
                  Operando 2
                </p>
                <input type="number" name="op2" id="op2" #op2/>

                <p>
                  <button type="button" name="button" (click)="suma(op1.value, op2.value)" id="suma">Sumar</button>
                </p>

                <div>
                  <p id="result">{{result}}</p>
                </div>

              </div>`
})

export class CalculatorComponent {

  result:number

  constructor(private calculatorService:CalculatorService){}

  suma(a:number, b:number){
    this.result = this.calculatorService.sum(a, b)
  }

}
