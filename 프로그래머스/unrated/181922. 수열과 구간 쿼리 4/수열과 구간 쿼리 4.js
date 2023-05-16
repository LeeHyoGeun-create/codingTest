function solution(arr, queries) {
    const answer = [...arr]
    for(const [s, e, k] of queries){
        for(let i = s; i <= e; i++){
            if(i % k === 0){
                answer[i] += 1;
            }
        }
    }
    return answer;
}