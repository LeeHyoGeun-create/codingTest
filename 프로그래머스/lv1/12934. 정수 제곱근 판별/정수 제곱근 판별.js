function solution(n) {
    // 제곱근을 구하고 정수가 아니라면 (parseInt값과 동일한지 확인)
    // -1을 리턴
    // 맞으면 x+1의 제곱을 리턴
    var answer = 0;
    const sqrtNum = Math.sqrt(n);
    if(parseInt(sqrtNum, 10) === sqrtNum){
        // n % Math.sqrt(n) === 0 나눠지는 걸로 확인
        // Number.isInteger로 정수 값인지 확인.
        answer = (sqrtNum + 1) ** 2
        // num * num
        // Math.pow()
        return answer;
    }
    answer = -1;
    return answer;
}