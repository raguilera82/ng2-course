import { Component, OnInit } from '@angular/core'
import { FormBuilder, ControlGroup, AbstractControl, Control, FORM_DIRECTIVES,
Validators } from '@angular/common'

import { HelloWorldService } from './hello-world.service'
import { CommonValidator } from '../validators/common.validator'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService],
  template: `<p id="hello">{{hello}}</p>
             <form [ngFormModel]="form">
                <p>Username:</p>
                <input type="text" ngControl="username"/>
                <div *ngIf="!username.valid && username.dirty">
                  <p *ngIf="username.errors.required">Username required</p>
                  <p *ngIf="username.errors.startWithNumber">Username can not start with number</p>
                </div>
                <p>Password:</p>
                <input type="password" ngControl="password"/>
                <div *ngIf="!password.valid && password.dirty">
                  <p *ngIf="password.errors.required">Password required</p>
                </div>
                <input type="submit" value="Send" [disabled]="!form.valid"/>
             </form>`,
    directives: [FORM_DIRECTIVES]

})

export class HelloWorldComponent implements OnInit{
  hello: string
  form: ControlGroup
  username: AbstractControl
  password: AbstractControl

  constructor(private helloWorldService:HelloWorldService,
  private formBuilder:FormBuilder){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
    this.form = new ControlGroup({
      username: new Control('', Validators.compose([Validators.required, CommonValidator.startWithNumber])),
      password: new Control('', Validators.compose([Validators.required]))
    })
    this.username = this.form.controls['username']
    this.password = this.form.controls['password']
  }

}
