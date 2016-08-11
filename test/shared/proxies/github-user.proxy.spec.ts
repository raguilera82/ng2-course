import {describe, it, expect, beforeEachProviders, beforeEach,
inject, async} from '@angular/core/testing'
import {MockBackend, MockConnection} from '@angular/http/testing'
import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http'
import {provide} from '@angular/core'

import {GithubUserProxy} from '../../../app/shared/proxies/github-user.proxy'

describe('Github proxy', () => {

  beforeEachProviders(() => [
    GithubUserProxy,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions)
      },
      deps: [MockBackend, BaseRequestOptions]
    })

  ])

  beforeEach(inject([MockBackend], (backend: MockBackend) => {
    const baseResponse = new Response(new ResponseOptions(
      {
        body: `{
            "login": "raguilera82",
            "id": 818068,
            "avatar_url": "https://avatars.githubusercontent.com/u/818068?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/raguilera82",
            "html_url": "https://github.com/raguilera82",
            "followers_url": "https://api.github.com/users/raguilera82/followers",
            "following_url": "https://api.github.com/users/raguilera82/following{/other_user}",
            "gists_url": "https://api.github.com/users/raguilera82/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/raguilera82/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/raguilera82/subscriptions",
            "organizations_url": "https://api.github.com/users/raguilera82/orgs",
            "repos_url": "https://api.github.com/users/raguilera82/repos",
            "events_url": "https://api.github.com/users/raguilera82/events{/privacy}",
            "received_events_url": "https://api.github.com/users/raguilera82/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Rubén Aguilera Díaz-Heredero",
            "company": "Autentia",
            "blog": "http://www.adictosaltrabajo.com",
            "location": "San Fernando de Henares",
            "email": "raguilera@autentia.com",
            "hireable": null,
            "bio": null,
            "public_repos": 22,
            "public_gists": 2,
            "followers": 13,
            "following": 0,
            "created_at": "2011-05-30T06:27:46Z",
            "updated_at": "2016-08-05T05:54:31Z"
          }`
      }
    ))
    backend.connections.subscribe((c:MockConnection) => c.mockRespond(baseResponse))
  }))

  it('should search user', async(inject([GithubUserProxy], (proxy:GithubUserProxy) => {
    const USERNAME:string = 'raguilera82'
    proxy.searchByUsername(USERNAME).subscribe(
      res => {
        expect(res.json().login).toBe(USERNAME)
      }
    )
  })))

})
