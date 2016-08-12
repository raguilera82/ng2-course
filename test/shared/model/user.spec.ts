import {User} from '../../../app/shared/model/user'

describe('User model', () => {

  it ('should exits user', () => {
    const LOGIN = 'raguilera82'
    const NAME = 'Rubén Aguilera Diaz-Heredero'
    const IMAGE_URL = 'http://image'
    let user:User = new User(LOGIN, NAME, IMAGE_URL)
    expect(user).toBeDefined()
    expect(user.login).toBe(LOGIN)
    expect(user.name).toBe(NAME)
    expect(user.imageUrl).toBe(IMAGE_URL)
  })


})
