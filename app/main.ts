import {Component} from '@angular/core'
import {DataExampleComponent} from './example/data-example.component'

@Component({
  selector: 'ng2-app',
  template: `<data-example></data-example>`,
  directives: [DataExampleComponent]
})

export class AppComponent{

  constructor(){
  }

}
