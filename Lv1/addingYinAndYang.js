// 음양 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

// 나의 풀이
function solution(absolutes, signs) {
    let answer = 0;
    let aLen = absolutes.length;
    
    for(let i = 0 ; i <aLen; i++){
        signs[i] = (signs[i] === true) ? 1 : -1
        answer += signs[i] * absolutes[i]
    }
    
    return answer ;
}

// ================================================================
// 타인의 풀이
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

// 느낀점
//  배열의 합을 연산할때는 reduce를 생각하자. 그치만 2개의 배열의 루프를 돌릴때는 reduce가 for보다 속도가 느리므로 유의해서 쓰자.


