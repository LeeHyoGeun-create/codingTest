function solution(x, n) {
    // x부터 시작해서 x씩 증가하는 n개의 리스트
    // n번 반복하며 반복할 때마다 n과 x의 곱을 리스트에 넣는다
    
    var answer = [];
    for(let i = 1 ; i <= n; i++){
        answer.push(x * i)
    }
    
    
    return answer;
}