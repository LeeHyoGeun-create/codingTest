function solution(a, b, c) {
    let answer = 1;
    if(a === b || b === c || a === c){
        if(a === b && b === c && a === c){
            answer *= a ** 3 + b ** 3 + c ** 3;
        }
        answer *= a ** 2 + b ** 2 + c ** 2;
    }
    answer *= a + b + c;
    return answer;
}