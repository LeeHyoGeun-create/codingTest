function solution(arr, k) {
    const answer = [];
    const mySet = new Set(arr);
    const changeArr = Array(...mySet);
    let i = 0;
    mySet.size
    while(answer.length !== k){
        changeArr[i] !== undefined ? answer.push(changeArr[i]) : answer.push(-1);
        i++;
    }
    return answer;
}