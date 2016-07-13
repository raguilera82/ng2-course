///<reference path="./../typings/main.d.ts"/>
import 'reflect-metadata'
import 'es6-shim'
import 'rxjs'
import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { provide } from '@angular/core'

import {AppComponent} from './main'
import { CONFIG_TOKEN, config } from './config/configuration'

bootstrap(AppComponent, [
  provide(CONFIG_TOKEN, {useValue: config})
])
