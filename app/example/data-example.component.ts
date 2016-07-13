import {Component, OnInit} from '@angular/core'

import {DataChildComponent} from './data-child.component'

@Component({
  selector: 'data-example',
  template: `<p>{{name}}</p>
             <p [innerHTML]="name"></p>
             <button (click)="onClick()">Click</button>
             <input type="text" [(ngModel)]="twoway"/>
             <p>{{twoway}}</p>
             <data-child [name]="name" (created)="onCreated($event)"></data-child>
             <p *ngIf="msg">{{msg}}</p>`,
  directives: [DataChildComponent],
  host: {
    '(click)':'onClickHost()'
  }
})

export class DataExampleComponent implements OnInit {

  name: string
  twoway: string
  msg: string

  ngOnInit(){
    this.name = 'Mateo'
  }

  onClick(){
    console.log('Clicked button')
  }

  onClickHost(){
    console.log('Clicked button on host')
  }

  onCreated(event){
    this.msg = event
  }

}
