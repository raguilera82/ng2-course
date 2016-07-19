import {Component} from '@angular/core'

import {HelloWorldComponent} from './helloworld/hello-world.component'
import {CalculatorComponent} from './calculator/calculator.component'

@Component({
  selector: 'ng2-app',
  template: `<tnt-calc><tnt-calc>`,
  directives: [HelloWorldComponent, CalculatorComponent],
})

export class AppComponent{

  constructor(){
  }

}
