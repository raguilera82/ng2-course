import { Component, OnInit } from '@angular/core'
import { RouteSegment } from '@angular/router'

@Component({
  selector: 'other',
  template: `<p>Parameters:</p>
             <p>Param 1: {{param1}}</p>
             <p>Param 2: {{param2}}</p>`
})

export class OtherComponent implements OnInit{

  param1: string
  param2: string

  constructor(private routeSegment:RouteSegment){}

  ngOnInit(){
      this.param1 = this.routeSegment.getParam('param1')
      this.param2 = this.routeSegment.getParam('param2')
  }

}
