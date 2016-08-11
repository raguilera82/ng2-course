///<reference path="./../typings/main.d.ts"/>
import 'reflect-metadata'
import 'es6-shim'
import 'rxjs'
import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http'
import {AppComponent} from './main'
import {GithubUserProxy} from './shared/proxies/github-user.proxy'
import {provide} from '@angular/core'

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  GithubUserProxy
])
