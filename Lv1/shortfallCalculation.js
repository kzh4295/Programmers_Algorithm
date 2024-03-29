// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

// 나의 풀이
function solution(price, money, count) {
    let answer = 0;
    let arr = Array.from({length: count}, ()=>price) // [3, 3, 3, 3]
    
    total = arr.reduce((acc, ele, idx)=> acc += ele * (idx + 1), 0)   
    
    answer = money - total >= 0 ? 0 : total - money

    return answer;
}


// ================================================================
// 타인의 풀이
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

// 느낀점
// 가우스의 공식을 이용하여 구할 수도 있구나...이 코드 다시보자.. 완전 이해가 되지는 않았다...

