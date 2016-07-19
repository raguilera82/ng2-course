import {CalculatorService} from '../../../app/calculator/calculator.service.jasmine'
import {SumService} from '../../../app/calculator/sum.service'
import {MinusService} from '../../../app/calculator/minus.service'

describe('Calculator service', ()=>{

  let sumService:SumService;
  let minusService:any;

  beforeEach(()=>{
    sumService = new SumService()
    minusService = jasmine.createSpyObj('minusService', ['execute'])
    minusService.execute.and.callFake((a,b)=>{
      return a - b
    })
  })

  it('sum two numbers', () => {
    let a:number = 4
    let b:number = 6
    let result:number = sumService.execute(a, b)
    expect(result).toBe(10)

  })

  it('sum two numbers async', (done) => {
    let a:number = 4
    let b:number = 2
    let resultPromise:Promise<number> = sumService.executeAsync(a, b)
    resultPromise.then((result)=>{
        expect(result).toBe(6)
        done()
    })

  })

  it('sum two numbers async with fake', () => {
    let a:number = 0
    let b:number = 2
    let sumServiceFake = jasmine.createSpyObj('sumService', ['executeAsync'])
    sumServiceFake.executeAsync.and.callFake((a,b)=>{
      return a + b
    })
    let result:number = sumServiceFake.executeAsync(a, b)
    expect(result).toBe(2)

})


  it('minus two numbers', () => {
    let a:number = 4
    let b:number = 6
    let result:number = minusService.execute(a, b)
    expect(result).toBe(-2)

  })

  it('minus two numbers', () => {
    let a:number = 4
    let b:number = 4
    let result:number = minusService.execute(a, b)
    expect(result).toBe(0)

  })

})
