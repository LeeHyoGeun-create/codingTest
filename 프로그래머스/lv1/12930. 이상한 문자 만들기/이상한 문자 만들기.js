function solution(s) {
    // 별도의 인덱스 변수를 만들어서
    // 빈칸을 만났을 경우 초기화
    // 문자일 경우 +1을 하며
    // 인덱스가 짝수일 경우 대문자로 만들고
    // 홀수일 경우 소문자로 만든다.
    // 빈칸일 경우 빈칸을 삽입
    let answer = '';
    let index = 0;
    
    for(value of s){
        if(value === ' '){
            answer += value;
            index = 0;
            continue;
        }
        answer += index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
        index++;
    }
    
    return answer;
}


/* 공백이 한번에 여러 번 띄워져 있을 경우 동작 안할듯.
function solution(s) {
    // split으로 나누고 각 배열마다
    // toUpperCase toLowerCase 를 실행해줌
    // 빈칸을 다시 만들어야 하므로 
    // 문자를 합칠 때 ' '을 넣고
    // trim으로 끝 공백을 삭제
    
    let answer = '';
    
    const splitArr = s.split(' ');
    for(value of splitArr){
        answer += makeSnake(value) + ' ';
    }
    answer = answer.trim();
    return answer;
}


function makeSnake(s){
    let result = '';
    [...s].forEach((value, index)=>{
        if(index % 2 === 0){
            result += value.toUpperCase();
        } else{
            result += value.toLowerCase();
        }
    })
    return result;
}
*/