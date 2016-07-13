import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'data-child',
  template: `<p>This is the name: {{name}}</p>
             <button (click)="create()">Create</button>`
})

export class DataChildComponent {
  @Input() name: string
  @Output() created = new EventEmitter<string>()

  create(){
    this.created.emit('Created ' + this.name)
  }

}
