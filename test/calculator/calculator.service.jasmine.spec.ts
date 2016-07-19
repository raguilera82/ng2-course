import {CalculatorService} from '../../app/calculator/calculator.service.jasmine'
import {SumService} from '../../app/calculator/sum.service'
import {MinusService} from '../../app/calculator/minus.service'

describe('Calculator service', ()=>{

  let sumService:SumService;
  let minusService:MinusService;

  beforeEach(()=>{
    sumService = new SumService()
    minusService = new MinusService()
  })

  it('sum two numbers', () => {
    let a:number = 4
    let b:number = 6
    let result:number = sumService.execute(a, b)
    expect(result).toBe(10)

  })

  it('minus two numbers', () => {

    let a:number = 4
    let b:number = 6
    let result:number = minusService.execute(a, b)
    expect(result).toBe(-2)

  })

})
