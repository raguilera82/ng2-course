import { Inject, Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { CONFIG_TOKEN, Configuration } from '../config/configuration'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ChuckService {

  constructor(private http:Http,
              @Inject(CONFIG_TOKEN) private config:Configuration){}

  getQuote(): Observable<string>{
    return this.http.get(this.config.api + '/api/random-quote')
    .map(response => response.text())
  }

}
