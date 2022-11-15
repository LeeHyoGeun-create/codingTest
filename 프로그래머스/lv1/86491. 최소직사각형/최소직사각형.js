function solution(sizes) {
    // firstMax에는 배열의 큰 값 중에서 최대값
    // secondMax에는 배열의 작은 값 중에서 최대값
    // 각 위치의 최고 사이즈를 골라 곱하면 됨.

    let firstMax = 0;
    let secondMax = 0;
    
    for(value of sizes){
        const first = Math.max(...value);
        const second = Math.min(...value);
        if(firstMax < first){
            firstMax = first;
        }
        if(secondMax < second){
            secondMax = second;
        }
    }
    
    let  answer = firstMax * secondMax;
    return answer;
}