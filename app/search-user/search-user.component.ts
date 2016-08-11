import {Component} from '@angular/core'
import {User} from '../shared/model/user'
import {SearchUserService} from './search-user.service'
import {SearchUserAdapter} from './search-user.adapter'

@Component({
  selector: 'au-search-user',
  template: `<input type="text" #username>
             <button id="searchUser" (click)="searchUser(username.value)">Search</button>
             <div *ngIf="user">
              <p id="login">{{user.login}}</p>
              <p id="name">{{user.name}}</p>
              <img src="{{user.imageUrl}}"/>
             </div>`,
  providers: [SearchUserService, SearchUserAdapter]
})

export class SearchUserComponent {

  user: User

  constructor(private searchUserService:SearchUserService){}

  searchUser(username:string){
    this.searchUserService
    .searchUser(username).subscribe(
      value => {
        this.user = value
      },
      error => console.log(error)
    )
  }

}
