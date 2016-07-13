import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'data-example',
  template: `<p>{{name}}</p>
             <p [innerHTML]="name"></p>
             <button (click)="onClick()">Click</button>`,
  host: {
    '(click)':'onClickHost()'
  }
})

export class DataExampleComponent implements OnInit {

  name: string

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
