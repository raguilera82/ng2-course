import {describe, it,
  beforeEachProviders, inject} from '@angular/core/testing'
import {DecoratorPipe} from '../../../app/pipes/decorator.pipe'

describe('DecoratorPipe', () => {
  beforeEachProviders(() => [
    DecoratorPipe
  ])
  
  it ('apply decorator', inject([DecoratorPipe], (pipe) => {
    let result = pipe.transform('Test', '***')
    expect(result).toBe('***Test***')
  }))
})
