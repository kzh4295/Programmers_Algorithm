// 나머지가 1이 되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

// 나의 풀이
function solution(n) {
    let answer = 0;
    let i = 1
    for(let i= 1; i<n; i++){
        if(n % i === 1){
             break
        }
        answer= i + 1
    }
    return answer;
}

// ================================================================
// 타인의 풀이
function solution(n) {
    for(let i=1; i<=n; i++){
        if(n%i===1) return i;
    }
}

//느낀점
// - 굳이 answer변수를 1개 더 쓰지 말고, 진행해도 되었겠다. 
// - for문은 return문으로 값을 반환해도 이후의 조건 루프를 타니까 break문을 거는 것이 좋겠다.



// ================================================================
// 타인의 풀이
function solution(n) {
    var answer = 1;
    while(n%answer!=1)answer++;
    return answer;
}

//느낀점
// while문을 쓸대 안에 조건식을 어떻게 처리 해야하나 궁금했는데 이렇게 쓰면 되겠구나.

