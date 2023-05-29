function solution(arr, intervals) {
    const answer = [];
    const [[a1,b1], [a2,b2]] = intervals;
    for([a, b] of intervals){
        answer.push(...arr.slice(a,b+1));
    }
    return answer;
}