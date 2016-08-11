import {User} from '../shared/model/user'

export class SearchUserAdapter {

  adapterToUser(json:any): User {
    return new User(json.name, json.avatar_url)
  }

}
