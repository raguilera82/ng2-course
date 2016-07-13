import { Component, Inject, OnInit } from '@angular/core'

import { ExampleService } from './example.service'
import { HelloWorldService } from '../helloworld/hello-world.service'
import { CONFIG_TOKEN, Configuration} from '../config/configuration'

@Component({
  selector: 'child',
  template: `{{msg}}`
})

export class ChildComponent implements OnInit{

  msg: string

  constructor(
    private helloWorldService:HelloWorldService,
    private exampleService:ExampleService,
    @Inject(CONFIG_TOKEN) private config:Configuration
  ){}

  ngOnInit(){
    this.msg = this.config.api + this.helloWorldService.getHello() + this.exampleService.getExample()
  }

}
