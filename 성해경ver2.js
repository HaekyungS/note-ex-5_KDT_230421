const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 }
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" }
};

// 아래의 함수는 임의의 돈에 대해 얼마짜리를 넣었는지 확인 가능하도록 로직 구성
function exampleOne(inputPrice, currency, basicData) {

  if (inputPrice === currency.thousand.value) {
    console.log(`${currency.thousand.name}을 넣었습니다.`)
  } else if (inputPrice === currency.fiveThousand.value) {
    console.log(`${currency.fiveThousand.name}을 넣었습니다.`)
  } else if (inputPrice === currency.tenThousand.value) {
    console.log(`${currency.tenThousand.name}을 넣었습니다.`)
  } else if (inputPrice === currency.fiveHundred.value) {
    console.log(`${currency.fiveHundred.name}을 넣었습니다.`)
  } else if (inputPrice === currency.hundred.value) {
    console.log(`${currency.hundred.name}을 넣었습니다.`)
  } else {
    console.log("지폐가 아닙니다. 지폐를 넣어주세요.")
  }

  // inputPrice가 모든 제품금액보다 작은 경우 하단 실행.
  if (basicData.every((e) => {

    // 콘솔로 금액에 대해 조회 잘 되는지 확인.
    // console.log(e.price)
    return inputPrice < e.price
  })) {
    console.log("잔액이 부족합니다.")
  }
  // inputPrice가 모든 제품금액보다 큰 경우 하단 실행.
  else if (basicData.every((e) => {
    return inputPrice > e.price
  })) {
    console.log("당신은 부자입니다! 무엇이든 구매 가능하세요!")
    let YouCanBuyItem = []

    // forEach 매서드를 이용해 조건이 일치하는 품목만 배열에 추가.
    basicData.forEach((element) => {
      if (element.price <= inputPrice) {
        YouCanBuyItem.push(element.name);
      }
    })

    // 모두 추가된 이 후, join 을 이용해, 배열을 문자열로 합쳐서 출력
    console.log(`지불하신 금액으로는 ${YouCanBuyItem.join()}을 구매 가능하십니다.`)
  } else {
    // 구매가능 품목이 있는 경우 (모두 구매가능은 아닌 경우)
    let YouCanBuyItem = []

    basicData.forEach((element) => {
      if (element.price <= inputPrice) {
        YouCanBuyItem.push(element.name);
      }
    })

    console.log(`지불하신 금액으로는 ${YouCanBuyItem.join()}을 구매 가능하십니다.`)
  }

}

exampleOne(1000, currency, basicData);