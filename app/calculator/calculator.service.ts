import {SumService} from './sum.service'
import {MinusService} from './minus.service'

export class CalculatorService {

  constructor(private sumService:SumService, private minusService:MinusService){
  }

  sum(op1: number, op2:number): number {
    return this.sumService.execute(op1, op2)
  }

  minus(op1: number, op2:number): number {
    return this.minusService.execute(op1, op2)
  }


}
