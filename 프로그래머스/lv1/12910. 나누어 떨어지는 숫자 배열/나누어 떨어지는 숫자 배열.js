function solution(arr, divisor) {
    // divisor로 나누어 떨어지는 값을
    // 배열에 넣고
    // sort 함수로 비교
    // 정렬된 배열을 리턴
    
    const answer = arr.filter((value)=> (value % divisor) === 0).sort((a,b) => a-b);
    if(answer.length === 0){
        return [-1];
    }
    
    return answer;
}