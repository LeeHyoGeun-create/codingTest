function solution(arr, queries) {
    const answer = [];
    for(const [s,e,k] of queries){
        const temp = [];
        for(let i = s; i <= e ; i++){
            if(arr[i] > k){
                temp.push(arr[i]);
            }
        }
        const min = Math.min(...temp);
        answer.push(isFinite(min) ? min : -1);
    }
    return answer;
}