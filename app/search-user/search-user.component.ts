import {Component} from '@angular/core'
import {User} from '../shared/model/user'
import {SearchUserService} from './search-user.service'
import {SearchUserAdapter} from './search-user.adapter'

@Component({
  selector: 'au-search-user',
  template: `<input type="text" #username>
             <button (click)="searchUser(username.value)">Search</button>
             <div *ngIf="user">
              <p>{{user.name}}</p>
              <img src="{{user.imageUrl}}"/>
             </div>`,
  providers: [SearchUserService, SearchUserAdapter]
})

export class SearchUserComponent {

  user: User

  constructor(private searchUserService:SearchUserService){}

  searchUser(username:string){
    console.log(username)
    this.searchUserService
    .searchUser(username).subscribe(
      value => this.user = value,
      error => console.log(error)
    )
  }

}
