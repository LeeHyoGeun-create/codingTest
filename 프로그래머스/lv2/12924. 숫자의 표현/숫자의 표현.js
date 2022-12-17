function solution(n) {
    // num을 1씩 증가하면서
    // num + 1, num + 2, num + 3의 값을 연속적으로 구한다.
    // 합이 n과 같아지면 count를 올려주고
    // 넘어가면 다음으로 진행
    let answer = 0;
    let num = 0;
    while(num !== n){
        num += 1;
        let increaseNum = num;
        let sum = 0;
        while(true){
            if(sum === n){
                answer++;
                break;
            }
            if(sum > n){
                break;
            }
            sum += increaseNum++;      
        }
    }
    return answer;
}