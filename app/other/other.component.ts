import { Component, OnInit } from '@angular/core'
import { RouteSegment, Router } from '@angular/router'

@Component({
  selector: 'other',
  template: `<p>Parameters:</p>
             <p>Param 1: {{param1}}</p>
             <p>Param 2: {{param2}}</p>
             <button (click)="goToHello()">Go to Hello</button>`
})

export class OtherComponent implements OnInit{

  param1: string
  param2: string

  constructor(private routeSegment:RouteSegment,
              private router:Router){}

  ngOnInit(){
      this.param1 = this.routeSegment.getParam('param1')
      this.param2 = this.routeSegment.getParam('param2')
  }

  goToHello(){
    this.router.navigate(['/hello'])
  }

}
