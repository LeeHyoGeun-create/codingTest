function solution(s) {
    // 공백을 기준으로 split을 한 후
    // 해당 배열을 순회하며 첫 문자에 toUpperCase를 해준다.
    // 그리고 공백을 넣고 answer에 합쳐준다.
    let answer = '';
    let isUpper = 0;
    for(let value of s){
        if(value === ' '){
            answer += ' ';
            isUpper = 0;
            continue;
        }
        answer += isUpper++ === 0 ? value.toUpperCase() : value.toLowerCase();
    }
    return answer;
}