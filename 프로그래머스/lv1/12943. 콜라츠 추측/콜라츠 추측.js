function solution(num) {
    // while문으로 반복하며 해당 작업이 한번 끝나면 count를 더한다
    // count가 500번을 초과한다면 -1을 반환한다.
    // num이 1이되면 count를 반환한다.
    let count = 0;
    const MAX_NUMBER = 500;
    while(true){
        if(count > MAX_NUMBER){
            return -1;
        }
        if(num === 1){
            return count;
        }
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count++;
    }
}

/*
    while(num !=1 && answer !=500)
    두 조건을 이렇게 합칠 수 있다.
    num !=1이면 뒤에 식까지 진행
*/