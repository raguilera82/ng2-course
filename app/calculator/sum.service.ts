export class SumService{

  execute(op1:number, op2:number): number {
    return +op1 + +op2;
  }

  executeAsync(op1:number, op2:number): Promise<number>{
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(+op1 + +op2)
      }, 2000)
    })
  }


}
