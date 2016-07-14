import { Component, OnInit } from '@angular/core'

import { HelloWorldService } from './hello-world.service'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService],
  template: `<p id="hello">{{hello}}</p>
             <button (click)="getQuote()">Get Quote</button>
             <p>{{quote}}</p>`

})

export class HelloWorldComponent implements OnInit{
  hello: string
  quote: string

  constructor(private helloWorldService:HelloWorldService){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
  }

  getQuote(){
    this.quote = 'Quote Fake'
  }

}
