function solution(s) {
    // 공백을 기준으로 홀짝을 판단해야 하므로 split으로 구분해 주기
    let arr = s.split(' '); // ['try', 'hello', 'world']
    let result = '';
    
    for( let i = 0 ; i < arr.length ; i++ ){ // ['try', 'hello', 'world'] 하나하나씩 돈다.
        for( let j = 0 ; j < arr[i].length ; j++){ // ex) 'try'일 때 0 1 2 돈다. 
            if( j % 2 === 0) {
                result += arr[i][j].toUpperCase(); // 위치가 짝수면 대문자
            } 
            else {
                result += arr[i][j].toLowerCase(); // 위치가 홀수면 소문자
            }
        }
        
        if ( i  <  arr.length-1 ) // 한 단어가 끝나는 곳에 공백을 추가해야 되기 때문에 마지막 위치에서 -1한 곳까지만 추가
            result += " ";
    }
    return result;
}

/*
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
*/


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