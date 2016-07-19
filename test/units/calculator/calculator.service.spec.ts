import {describe, it, beforeEachProviders, inject, expect} from '@angular/core/testing'

import {CalculatorService} from '../../../app/calculator/calculator.service'
import {SumService} from '../../../app/calculator/sum.service'
import {MinusService} from '../../../app/calculator/minus.service'

describe('Calculator service', ()=>{

  beforeEachProviders(() => [
    SumService, MinusService
  ])


  it('sum two numbers', (inject([SumService], (sumService:SumService) => {
    let a:number = 4
    let b:number = 6
    let result:number = sumService.execute(a, b)
    expect(result).toBe(10)

  })))

  it('minus two numbers', (inject([MinusService], (minusService:MinusService) => {

    let a:number = 4
    let b:number = 6
    let result:number = minusService.execute(a, b)
    expect(result).toBe(-2)


  })))

  it('operations two numbers', (inject([SumService, MinusService], (sumService:SumService, minusService:MinusService) => {

    let a:number = 4
    let b:number = 6
    let resultMinus:number = minusService.execute(a, b)
    expect(resultMinus).toBe(-2)

    let resultSum:number = sumService.execute(a, b)
    expect(resultSum).toBe(10)


  })))

})
