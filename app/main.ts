import {Component} from '@angular/core'
import {SearchUserComponent} from './search-user/search-user.component'
import {SearchUserComponentBad} from './search-user/search-user-bad.component'

@Component({
  selector: 'ng2-app',
  template: `<au-search-user-bad></au-search-user-bad>`,
  directives: [SearchUserComponentBad]
})

export class AppComponent{

  constructor(){
  }

}
