function solution(a, b) {
    // a와 b를 정렬하고
    // a와 b 사이에 속한 모든 정수를 구함
    let answer = 0;
    let  MIN_NUMBER_IN = a;
    let MAX_NUMBER_IN = b;
    if(a > b){
        [MIN_NUMBER_IN, MAX_NUMBER_IN] = [MAX_NUMBER_IN, MIN_NUMBER_IN]
    }
    answer = ((MAX_NUMBER_IN - MIN_NUMBER_IN + 1)*(MIN_NUMBER_IN+MAX_NUMBER_IN)) / 2;
// n 부터 m 까지의 합 (수의 개수)*(첫번째 수 + 마지막 수)/2
    return answer;
}