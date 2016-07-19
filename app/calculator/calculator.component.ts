import {Component} from '@angular/core'

import {CalculatorService} from './calculator.service'
import view from './calculator.view.html!text'

@Component({
  selector: 'tnt-calc',
  template: view
})

export class CalculatorComponent {

  result:number

  constructor(private calculatorService:CalculatorService){}

  suma(a:number, b:number){
    this.result = this.calculatorService.sum(a, b)
  }

}
