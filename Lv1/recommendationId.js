// 신규 아이디 추천
// https://school.programmers.co.kr/learn/courses/30/lessons/72410

// 나의 풀이
function solution(new_id) {
    let answer = '';
    
    //1단계 : new_id.toLowerCase() ;
    let lowId = new_id.toLowerCase();
    
    //2단계 : id.replace(/[^\w-_.]+/g,'')
    let markId = lowId.replace(/[^\w-_.]+/g,'')
    
    //3단계 : .. => . // idx && idx+1이 ..이면 .으로 replace
    let tempArr = [];
    let lenMarkId = markId.length;
    for(let i = 0; i < lenMarkId; i++){
        if(markId[i] !== '.' || markId[i+1] !=='.'){
            tempArr.push(markId[i])
        }
    }
    
    // 4단계 : 0번쨰 인덱스의 값이 . (shift) && length -1이 .이면(pop) 
    if(tempArr[0] === '.'){
        tempArr.shift()
    } else if(tempArr[tempArr.length -1] === '.'){
        tempArr.pop()
    }    
    
    //5단계 : length가 0이면 a를 대입
    if(tempArr.length === 0){
        tempArr.unshift('a')
    } 
    
    //6단계 : length가 16이상 이면, 0 ~ 15인덱스까지만 slice(0, 16)
    if(tempArr.length > 15){
        tempArr = tempArr.slice(0, 15)
    } 

    if(tempArr[tempArr.length -1] === '.'){
        tempArr.pop()
    }
    
    
    //7단계 : length 0은 없고, length 1(=>2), 2(=>3)은 pop하여 변수에 담은 인덱스를 push하여 넣음
    while(tempArr.length < 3){
        tempArr.push(tempArr[tempArr.length-1])
    }
    
    // answer에 담고 리턴
    answer = tempArr.join('')
    
    return answer;
}




