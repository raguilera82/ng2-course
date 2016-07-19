import {SumService} from './sum.service'
import {MinusService} from './minus.service'

export class CalculatorService {

  sum(op1: number, op2:number): number {
    let sumService = new SumService()
    return sumService.execute(op1, op2)
  }

  minus(op1: number, op2:number): number {
    let minusService = new MinusService()
    return minusService.execute(op1, op2)
  }


}
