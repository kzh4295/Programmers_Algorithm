// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

// 나의 풀이
function solution(x) {
  let answer = true;
  let arr = (x + '').split('').map((ele, idx) => ele * 1); // parameter로 받은 정수x를 자릿수에 따라 배열로 분해함(스트링배열로 변환 =>1:1 매핑으로 숫자열로 변경)
  let brr = arr.reduce((acc, ele) => {
    // 자릿수 숫자열의 합이 x로 나눈 나머지가 0일 경우 true를 return, 그렇지 않을 경우 false를 return
    return (acc += ele);
  }, 0);
  answer = x % brr === 0;
  return answer;
}

// ==========================================================================
// 타인의 풀이
function solution(n) {
  return !(n % (n + '').split('').reduce((a, b) => +b + +a));
}

//느낀점
// - 굳이 map을 써서 숫자열로 바꾸는데 한번 더 배열을 쓰지말고 문자열인 상태에서 암묵적(+'3') 타입 변환을 실행해야겠다


// ==========================================================================
// 타인의 풀이
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

// 느낀점
// - 자릿수의 합을 구하고자 할때는 굳이 배열을 생성하지 말자!
// - total += param % 10;
// - 자릿수 숫자열 :
//     - (n + "").split("").reduce((a, b) => +b + +a )
//     - total += param % 10; //자릿수의 합
//     - Math.floor()함수는 항상 내림하고 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환
