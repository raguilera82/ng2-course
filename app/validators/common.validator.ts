import { Control } from '@angular/common'

export class CommonValidator {

  static startWithNumber(control: Control){
    let firstChar = control.value.charAt(0)
    if (firstChar && !isNaN(firstChar)){
      return {'startWithNumber': true}
    }else{
      return null
    }
  }

}
