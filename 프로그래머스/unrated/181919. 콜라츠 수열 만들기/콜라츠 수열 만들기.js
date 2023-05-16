function solution(n) {
    const answer = [];
    answer.push(n);
    let temp = n;
    while(temp !== 1){
        if(temp % 2 === 0){
            temp = temp / 2;
        } else{
            temp = 3 * temp + 1;
        }
        answer.push(temp);
    }
    return answer;
}