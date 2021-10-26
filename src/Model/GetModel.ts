class GetStock { 
  public additionalUnit: number = Number()
  public id: number = Number()
  public pathUrl: string = String()
  public pointtoBuy: number = Number()
  public stockName:string = String()
  public stockTotal: number = Number()
  public stockunitPrice: number = Number()
  public typeMenuN: number = Number()
  public quantity: number
  constructor(zero: number = 0) {
   this.quantity = zero
  }
}

export default GetStock