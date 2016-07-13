import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'data-example',
  template: `<p>{{name}}</p>
             <p [innerHTML]="name"></p>
             <button (click)="onClick()">Click</button>
             <input type="text" [(ngModel)]="twoway"/>
             <p>{{twoway}}</p>`,
  host: {
    '(click)':'onClickHost()'
  }
})

export class DataExampleComponent implements OnInit {

  name: string
  twoway: string

  ngOnInit(){
    this.name = 'Mateo'
  }

  onClick(){
    console.log('Clicked button')
  }

  onClickHost(){
    console.log('Clicked button on host')
  }

}
