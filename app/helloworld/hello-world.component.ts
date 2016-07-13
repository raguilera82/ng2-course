import { Component, OnInit } from '@angular/core'

import { HelloWorldService } from './hello-world.service'
import { ExampleService } from '../example/example.service'
import { ChildComponent } from '../example/child.component'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService, ExampleService],
  template: `<p id="hello">{{hello}}</p>
             <child></child>`,
  directives: [ChildComponent]

})

export class HelloWorldComponent implements OnInit{
  hello: string

  constructor(private helloWorldService:HelloWorldService){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
  }

}
