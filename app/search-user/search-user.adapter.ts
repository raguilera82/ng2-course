import {User} from '../shared/model/user'

export class SearchUserAdapter {

  adapterToUser(json:any): User {
    return new User(json.login, json.name, json.avatar_url)
  }

}
