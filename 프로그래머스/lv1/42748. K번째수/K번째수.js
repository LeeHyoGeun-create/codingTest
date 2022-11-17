function solution(array, commands) {
    // split을 사용하여 배열을 가져옴 
    // 정렬
    // k 번쨰에 있는 수 가져옴    
    const answer = [];
    for(value of commands){
        // 번째를 조심해야한다...
        const sortedArr = array.slice(value[0]-1,value[1]).sort((a,b)=>a-b);
        answer.push(sortedArr[value[2]-1]);
    }
    return answer;
}