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

  static userTaken(control:Control): Promise<any>{
    return new Promise((resolve) => {
      setTimeout(()=>{
        if ('raguilera' === control.value){
          resolve({'userTaken': true})
        }else{
          resolve(null)
        }
      }, 2000)
    })
  }

}
