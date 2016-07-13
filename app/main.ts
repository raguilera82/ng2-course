import {Component} from '@angular/core'
import { Routes, ROUTER_DIRECTIVES } from '@angular/router'

import {HelloWorldComponent} from './helloworld/hello-world.component'

@Component({
  selector: 'ng2-app',
  template: `<nav>
                <a [routerLink]="['/hello']">Hello</a>
             </nav>
             <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/hello', component: HelloWorldComponent}
])

export class AppComponent{

  constructor(){
  }

}
