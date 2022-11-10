function solution(absolutes, signs) {
    // 배열의 길이만큼 순회하며 인덱스 대입
    // signs 배열의 값이 true면 + false면 -를 붙임
    var answer = 0;
    for(let i = 0; i < absolutes.length ; i++){
        const sign = signs[i] ? '+' : '-';
        answer += Number(sign + absolutes[i]) ;
    }
    return answer;
}