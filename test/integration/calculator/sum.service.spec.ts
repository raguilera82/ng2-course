import {describe, it, beforeEachProviders,
inject, async} from '@angular/core/testing'
import {SumService} from '../../../app/calculator/sum.service'

describe('Sum Service', () => {

  beforeEachProviders(() => [
    SumService
  ])

  it ('should sum two numbers async', async(inject([SumService],(sumService:SumService) => {
    sumService.executeAsync(4, 6).then(
      value => {
        expect(value).toBe(10)
      }
    )
  })))
})
