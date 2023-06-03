function solution(arr, queries) {
    const answer = [...arr];
    for(querie of queries){
        const [s, e] = querie;
        for(let i = s; i <= e; i++){
            answer[i] += 1;
        }
    }  
    return answer;
}