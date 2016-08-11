import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class GithubUserProxy {

  constructor(private http:Http){}

  searchByUsername(username:string): Observable<Response>{
    return this.http.get('https://api.github.com/users/' + username)
  }


}
