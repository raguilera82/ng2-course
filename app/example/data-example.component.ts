import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'data-example',
  template: `<p>{{name}}</p>
              <p [innerHTML]="name"></p>`
})

export class DataExampleComponent implements OnInit {

  name: string

  ngOnInit(){
    this.name = 'Mateo'
  }

}
