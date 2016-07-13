import {Injectable} from '@angular/core'

import {ExampleService} from '../example/example.service'

@Injectable()
export class HelloWorldService{

  constructor(private service:ExampleService){

  }

  getHello():string{
    return 'Hello World! ' + this.service.getExample()
  }
}
