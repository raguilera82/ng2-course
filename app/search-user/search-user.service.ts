import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {User} from '../shared/model/user'
import {SearchUserAdapter} from './search-user.adapter'
import {GithubUserProxy} from '../shared/proxies/github-user.proxy'

@Injectable()
export class SearchUserService {

  constructor(private githubUser:GithubUserProxy,
  private searchUserAdapter:SearchUserAdapter){}

  searchUser(username:string): Observable<User> {
    return this.githubUser.searchByUsername(username).map(
      data => {
        return this.searchUserAdapter.adapterToUser(data.json())
      }
    )
  }

}
