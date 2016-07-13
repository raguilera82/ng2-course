import {ExampleService} from '../example/example.service'

export class HelloWorldService{

  constructor(private service:ExampleService){

  }
  
  getHello():string{
    return 'Hello World! ' + this.service.getExample()
  }
}
