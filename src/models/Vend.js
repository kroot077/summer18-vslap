export default class Vend {
    constructor(data) {
        this.money = data.money,
        this.acceptableCurrency = data.acceptableCurrency,
        this.snacks = data.snacks
    }

    addMoney(type) {
      if (this.acceptableCurrency()) {
          this.money += this.acceptableCurrency()
      }  
    }
}