function solution(arr, queries) {
    const answer = [...arr];
    for(const [i,j] of queries){
        const temp = answer[i];
        answer[i] = answer[j];
        answer[j] = temp;
    }
    return answer;
}