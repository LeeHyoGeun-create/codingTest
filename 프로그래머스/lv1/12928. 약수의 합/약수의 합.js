function solution(n) {
    // 1부터 n까지 반복
    // 나눠지는 수를 answer에 추가한다.
    var answer = 0;
    for(let i = 1 ; i <= n ; i++ ){
        if(n % i === 0){
            answer += i;
        }
    }
    return answer;
}