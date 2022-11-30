function solution(k, m, score) {
    // 작은게 섞이면 작은거 값으로 하니깐 최대한 큰것만 담아야함
    // score를 sort하고 
    // m만큼 배열에 넣고
    // 배열의 최소값 * 배열의 길이
    const arrs = [];
    const sortedScore  = score.sort((a,b)=>a-b);
    let result = 0;
    
    while(true){
        // 더 이상 상자가 나오지 않으면 종료
        if(Math.floor(sortedScore.length / m) === 0){
            break;
        }
        const tempArr = [];
        for(let i = 0; i < m; i++){
            tempArr.push(sortedScore.pop());
        }
        arrs.push(tempArr);
    }
    for(arr of arrs){
        // 마지막 값이 최소 값
        result += m * arr.slice(-1);
    }
    return result;
}