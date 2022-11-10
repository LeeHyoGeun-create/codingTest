function solution(a, b) {
    // a의 길이만큼 순회를 돌며
    // 같은 인덱스의 곱을 answer에 누적
    var answer = 0;
    for(let i = 0 ; i < a.length ; i++){
        answer += a[i] * b[i];
    }
    return answer;
}