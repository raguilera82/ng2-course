import {Observable} from 'rxjs/Observable'
import {User} from '../../app/shared/model/user'

export class SearchUserServiceMock {

  searchUser(username:string): Observable<User> {
    return Observable.of(new User('raguilera82', 'http://image', 'Ruben Aguilera Diaz-Heredero'))
  }

}
