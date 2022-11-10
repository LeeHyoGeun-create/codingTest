function solution(absolutes, signs) {
    // 배열의 길이만큼 순회하며 인덱스 대입
    // signs 배열의 값이 true면 + false면 -를 붙임
    var answer = 0;
    for(let i = 0; i < absolutes.length ; i++){
        answer += Number((signs[i] ? '+' : '-') + absolutes[i]) ;
    }
    return answer;
}

/*
    signs[i] ? 1 : -1 이런식으로 곱해버리면 됨.
*/
