function solution(array, commands) {
    // split을 사용하여 배열을 가져옴 
    // 정렬
    // k 번쨰에 있는 수 가져옴    
    const answer = [];
    for(command of commands){
        // 번째를 조심해야한다...
        const [sPosition, ePosition, position] = command
        const sortedArr = array.slice(sPosition - 1, ePosition).sort((a,b)=>a-b);
        answer.push(sortedArr[position - 1]);
    }
    return answer;
}

/*
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}
*/