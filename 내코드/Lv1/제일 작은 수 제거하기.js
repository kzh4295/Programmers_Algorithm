소요시간 : 28:00

function solution(arr) {
    let answer = [];
    let minNum = Math.min(...arr);
    
    if(arr.length <=1){
        answer.push(-1);
    } else{
        answer = arr.filter((ele)=> ele !== minNum)}
    
    return answer;
}

====================타인의 코드 참고====================================

function solution(arr) {
    const min = Math.min(...arr);
    return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
}

느낀점 : 삼항 연산자를 써서 보다 가독성있게 해도 되었겠구나..
