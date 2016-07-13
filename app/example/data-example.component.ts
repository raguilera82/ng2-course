import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'data-example',
  template: `<p>{{name}}</p>`
})

export class DataExampleComponent implements OnInit {

  name: string

  ngOnInit(){
    this.name = 'Mateo'
  }

}
