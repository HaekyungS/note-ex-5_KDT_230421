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
function exampleOne(inputPrice, currency, basicData){
  // Q1. inputPrice 가 1000원이라면 currency.thousand.name 을 반환
  // 일천원권을 넣었습니다 라는 문구를 콘솔로그로 출력
  if(inputPrice === currency.thousand.value){
    console.log(`${currency.thousand.name}을 넣었습니다.`)
  }else if(inputPrice === currency.fiveThousand.value){
    console.log(`${currency.fiveThousand.name}을 넣었습니다.`)
  }else if(inputPrice === currency.tenThousand.value){
    console.log(`${currency.tenThousand.name}을 넣었습니다.`)
  }else if(inputPrice === currency.fiveHundred.value){
    console.log(`${currency.fiveHundred.name}을 넣었습니다.`)
  }else if(inputPrice === currency.hundred.value){
    console.log(`${currency.hundred.name}을 넣었습니다.`)
  }else{
    console.log("지폐가 아닙니다. 지폐를 넣어주세요.")
  }

  // Q2. 만약 inputPrice 가 1000원이라면 basicData 를 통해 구매 가능 제품을 console.log() 로 출력

  // Q3. 만약 inputPrice가 모든 제품의 가격보다 적다면, 잔액이 부족합니다. 라는 문구 출력

  // Q4. inputPrice가 모든 제품의 가격보다 많다면 "당신은 부자입니다." 문구 출력
}


exampleOne(1000, currency, basicData);