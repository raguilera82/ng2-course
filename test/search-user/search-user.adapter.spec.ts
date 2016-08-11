import {describe, it, beforeEachProviders, inject} from '@angular/core/testing'
import {SearchUserAdapter} from '../../app/search-user/search-user.adapter'
import {User} from '../../app/shared/model/user'

describe('Search user adapter', () => {

  beforeEachProviders(() => [
    SearchUserAdapter
  ])

  it ('should get user from json', inject([SearchUserAdapter], (searchUserAdapter:SearchUserAdapter) => {
      const LOGIN = 'raguilera82'
      const IMAGE_URL = 'http://image'
      let jsonData = {login: LOGIN, imageUrl: IMAGE_URL}
      let user:User = searchUserAdapter.adapterToUser(jsonData)
      expect(user).toBeDefined()
      expect(user.login).toBe(LOGIN)
  }))

})
