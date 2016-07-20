import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  async
} from '@angular/core/testing'

import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing'

import {CalculatorComponent} from '../../../app/calculator/calculator.component'
import {CalculatorService} from '../../../app/calculator/calculator.service'
import {SumService} from '../../../app/calculator/sum.service'
import {MinusService} from '../../../app/calculator/minus.service'

describe('Calculator component', () => {

  beforeEachProviders(() => [
    CalculatorService, SumService, MinusService
  ])

  it ('has all required elements', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(CalculatorComponent).then(
      (componentFixture:ComponentFixture<any>) => {
        let nativeElement = componentFixture.debugElement.nativeElement
        componentFixture.detectChanges()
        let qsOp1 = nativeElement.querySelector('#op1')
        expect(qsOp1).toBeDefined()
        qsOp1.value = 2
        let qsOp2 = nativeElement.querySelector('#op2')
        expect(qsOp2).toBeDefined()
        qsOp2.value = 3
        let sumButton = nativeElement.querySelector('#suma')
        sumButton.click()
        componentFixture.detectChanges()
        let result = nativeElement.querySelector('#result')
        expect(result.innerText).toBe('5')
      })
  })))
})
