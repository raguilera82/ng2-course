import {describe, it, beforeEachProviders,
inject, async, expect} from '@angular/core/testing'
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing'
import {provide} from '@angular/core'
import {SearchUserService} from '../../app/search-user/search-user.service'
import {SearchUserServiceMock} from './search-user.service.mock'
import {SearchUserComponent} from '../../app/search-user/search-user.component'

describe('Search user component', () => {

  it ('should show user', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb
    .overrideProviders(SearchUserComponent, [provide(SearchUserService, {useClass:SearchUserServiceMock})])
    .createAsync(SearchUserComponent).then(
      (cf:ComponentFixture<SearchUserComponent>) => {
        let ne = cf.debugElement.nativeElement
        ne.querySelector('#searchUser').click()
        cf.detectChanges()
        let login = ne.querySelector('#login')
        expect(login.innerHTML).toBe('raguilera82')
      }
    )
  })))

})
