import {Component} from '@angular/core'
import {Http} from '@angular/http'
import {User} from '../shared/model/user'
import {SearchUserService} from './search-user.service'
import {SearchUserAdapter} from './search-user.adapter'

@Component({
  selector: 'au-search-user-bad',
  template: `<input type="text" #username>
             <button (click)="searchUser(username.value)">Search</button>
             <div *ngIf="name">
              <p>{{name}}</p>
              <img src="{{imageUrl}}"/>
             </div>`
})

export class SearchUserComponentBad {

  name: string
  imageUrl: string

  constructor(private http:Http){}

  searchUser(username:string){
    console.log(username)
    this.http.get('https://api.github.com/users/' + username)
    .map(response => response.json())
    .subscribe(
      data => {
        console.log(data)
        this.name = data.name
        this.imageUrl = data.avatar_url
      },
      error => console.log(error)
    )
  }

}
