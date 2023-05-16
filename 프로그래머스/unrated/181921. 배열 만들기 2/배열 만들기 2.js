const isConsistZeroWithFive = (number) => {
    const mySet = new Set(String(number).split('').map(Number));
    for(let i = 0; i < 10; i++){ 
        if(i === 0 || i === 5){
            continue;
        }
        if(mySet.has(i)){           
            return false;
        }    
    }  
    return true;
}

function solution(l, r) {
    const answer = [];
    for(let i = l; i <= r ; i++){
        if(isConsistZeroWithFive(i)){
            answer.push(i);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}