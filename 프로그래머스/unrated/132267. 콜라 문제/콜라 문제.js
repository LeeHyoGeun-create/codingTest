function solution(a, b, n) {
    // 돌려받는 병 수 :  전체에서 a만큼 나눈 몫 * b
    // 다음 전체 병 수 : 이전 병수의 나머지 + 이전 돌려 받은 병 수 
    // 종료 조건 : 더 이상 돌려받을 병이 없을 때
    let answer = 0;
    const startNum = n;
    const divider = a;
    const giveNum = b;
    let tempNum = startNum;
  
    while(true){
        const cashback = Math.floor(tempNum / divider) * giveNum;
        console.log(cashback);
        if(cashback === 0){
            break;
        }
        
        answer += cashback;
        tempNum = cashback + tempNum % divider;
        
    }
    
    return answer;
}