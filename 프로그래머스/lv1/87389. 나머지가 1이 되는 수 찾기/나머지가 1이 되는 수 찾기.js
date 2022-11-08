function solution(n) {
    // n이 주어지면 
    // n % x 가 1 이 되는 최소의 x를 찾는다.
    for(let i = 2 ; i < n ; i++){
        if(n % i === 1){
            console.log(n, i);
            return i;
        }
    }   
}