import {describe, it, beforeEachProviders, inject, async} from '@angular/core/testing'
import {provide} from '@angular/core'
import {SearchUserService} from '../../app/search-user/search-user.service'
import {SearchUserAdapter} from '../../app/search-user/search-user.adapter'
import {GithubUserProxy} from '../../app/shared/proxies/github-user.proxy'
import {GithubUserProxyMock} from '../shared/proxies/github-user.proxy.mock'


describe('Search user service', () => {

  beforeEachProviders(() => [
    SearchUserService,
    provide(GithubUserProxy, {useClass: GithubUserProxyMock}),
    SearchUserAdapter
  ])

  it ('should search user by username', async(inject([SearchUserService], (searchUserService:SearchUserService) => {
    const USERNAME = 'raguilera82'
    searchUserService.searchUser(USERNAME).subscribe(
      data => {
        expect(data).toBeDefined()
        expect(data.login).toBe(USERNAME)
      }
    )
  })))

  it ('should search user by username-Error', async(inject([SearchUserService], (searchUserService:SearchUserService) => {
    const USERNAME = 'raguilera82'
    searchUserService.searchUser(USERNAME).subscribe(
      data => {
        expect(data).toBeDefined()
        expect(data.login).toBe(USERNAME)
      }
    )
  })))

})
