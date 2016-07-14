import {OpaqueToken} from '@angular/core'

export const CONFIG_TOKEN = new OpaqueToken('config')

export interface Configuration {
  api: string
}

export let config:Configuration = {
  api: 'http://localhost:3001'
}
