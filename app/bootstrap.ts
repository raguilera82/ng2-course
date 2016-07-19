///<reference path="./../typings/main.d.ts"/>
import 'reflect-metadata'
import 'es6-shim'
import 'rxjs'
import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import { bootstrap } from '@angular/platform-browser-dynamic'
import {AppComponent} from './main'
import {CalculatorService} from './calculator/calculator.service'
import {SumService} from './calculator/sum.service'
import {MinusService} from './calculator/minus.service'

bootstrap(AppComponent, [
  CalculatorService, SumService, MinusService
])
