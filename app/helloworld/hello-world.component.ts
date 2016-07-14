import { Component, OnInit } from '@angular/core'

import { HelloWorldService } from './hello-world.service'
import { ChuckService } from '../services/chuck.service'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService, ChuckService],
  template: `<p id="hello">{{hello}}</p>
             <button (click)="getQuote()">Get Quote</button>
             <p>{{quote}}</p>`

})

export class HelloWorldComponent implements OnInit{
  hello: string
  quote: string

  constructor(private helloWorldService:HelloWorldService,
              private chuckService:ChuckService){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
  }

  getQuote(){
    this.chuckService.getQuote()
    .subscribe(
      (data) => {
        this.quote = data
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
