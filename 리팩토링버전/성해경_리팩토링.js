import basicData from "./basicData.js"
import currency from "./currency.js"
import youCanBuyItem from "./youcanbuyitems.js"

function exampleOne(inputPrice, currency, basicData) {
  Object.keys(currency).forEach((e) => {
    if (currency[e].value === inputPrice) {
      return console.log(`${currency[e].name}을 넣었습니다.`)+youCanBuyItem(inputPrice,basicData)
    }
  })

  if (basicData.every((e) => {
    return inputPrice > e.price
  })) {
    console.log("당신은 부자입니다!")
  } else if (basicData.every((e) => {
    return inputPrice < e.price
  })) {
    console.log("잔액이 부족합니다.")
  }
}


exampleOne(1000, currency, basicData);