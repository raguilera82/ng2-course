import {describe, it, beforeEachProviders, inject, expect} from '@angular/core/testing'

import {CalculatorService} from '../../../app/calculator/calculator.service'
import {SumService} from '../../../app/calculator/sum.service'
import {MinusService} from '../../../app/calculator/minus.service'

describe('Calculator service', ()=>{

  beforeEachProviders(() => [
    CalculatorService, SumService, MinusService
  ])


  it('sum two numbers', (inject([CalculatorService], (calculatorService:CalculatorService) => {
    let a:number = 4
    let b:number = 6
    let result:number = calculatorService.sum(a, b)
    expect(result).toBe(10)

  })))

  it('sum two numbers async', (inject([SumService], (sumService:SumService) => {
    let a:number = 4
    let b:number = 6
    let resultPromise:Promise<number> = sumService.executeAsync(a, b)
    return resultPromise.then((result)=>{
      expect(result).toBe(10)
    })

  })))

  it('minus two numbers', (inject([CalculatorService], (calculatorService:CalculatorService) => {

    let a:number = 4
    let b:number = 6
    let result:number = calculatorService.minus(a, b)
    expect(result).toBe(-2)


  })))

  it('operations two numbers', (inject([CalculatorService], (calculatorService:CalculatorService) => {

    let a:number = 4
    let b:number = 6
    let resultMinus:number = calculatorService.minus(a, b)
    expect(resultMinus).toBe(-2)

    let resultSum:number = calculatorService.sum(a, b)
    expect(resultSum).toBe(10)


  })))

})
