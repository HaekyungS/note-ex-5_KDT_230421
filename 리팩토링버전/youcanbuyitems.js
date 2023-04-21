const youCanBuyItem = (inputPrice, basicData) => {
  let youCanBuyItems = []
  basicData.forEach((element) => {
    if (element.price <= inputPrice) {
      youCanBuyItems.push(element.name);
    }
  })
  return console.log(`지불하신 금액으로는 ${youCanBuyItems.join()}을 구매 가능하십니다.`)
}

export default youCanBuyItem