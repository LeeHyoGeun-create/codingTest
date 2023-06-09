function solution(arr) {
    let answer = [];
    for(const number of arr){
        answer = [...answer, ...Array(number).fill(number)];
    }
    return answer;
}