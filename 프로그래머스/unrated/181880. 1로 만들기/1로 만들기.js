function solution(num_list) {
    let answer = 0;
    const toOneNum = (num) => {
        let countNum = 0;
        while(num !== 1){
            if(num % 2 === 0){
                num = num / 2;
            } else{
                num = (num - 1) / 2;
            }
            countNum++;
        }
        return countNum;
    }
    
    for(const num of num_list){
        answer += toOneNum(num);
    }
    return answer;
}