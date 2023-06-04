function solution(arr) {
    const answer =[];
    for(const element of arr){
        if(element >= 50 && element % 2 === 0){
            answer.push(element / 2);
        } else if(element < 50 && element % 2 !== 0){
            answer.push(element * 2);
        } else{
            answer.push(element);
        }
        
    }
    return answer;
}