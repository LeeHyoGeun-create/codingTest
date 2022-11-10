function solution(n) {
    // index가 홀수이면 수
    // 짝수이면 박
    var answer = '';
    for(let i = 1; i <= n ; i++){
        if(i % 2 === 0){
            answer += "박";
            continue;
        }
        answer += "수";
    }
    return answer;
}