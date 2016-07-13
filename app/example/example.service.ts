import {Inject} from '@angular/core'

import {CONFIG_TOKEN, Configuration} from '../config/configuration'

export class ExampleService {

  constructor(@Inject(CONFIG_TOKEN) private config:Configuration){}

  getExample(): string {
    return 'This is an example ' + this.config.api
  }

}
