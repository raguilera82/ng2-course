import {Observable} from 'rxjs/Observable'
import {Response, ResponseOptions} from '@angular/http'

import {GithubUserProxy} from '../../../app/shared/proxies/github-user.proxy'

export class GithubUserProxyMock {

  searchByUsername(username:string): Observable<Response> {
    let response:Response = new Response(new ResponseOptions(
      {
        body: '{"login": "raguilera82", "avatar_url": "http://image", "name":"Ruben Aguilera Diaz-Heredero"}'
      }))
    return Observable.of(response)
  }


}
