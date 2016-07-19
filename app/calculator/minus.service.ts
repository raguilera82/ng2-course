export class MinusService{

  execute(op1:number, op2:number): number {
    console.log('Execute minus')
    this.pause(1000)
    return +op1 - +op2

  }

  pause(milliseconds):void {
    console.log('Entry in pause')
    var d1 = new Date();
    var d2 = new Date();
    while (d2.valueOf() < d1.valueOf() + milliseconds) {
      d2 = new Date();
    }
  }

}
