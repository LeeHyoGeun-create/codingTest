function solution(number) {
    // 배열 내 모든 값을 순회하면서
    // 합이 0인 경우 anwer의 값을 올린다.
    let answer = 0;
    for(let i = 0 ; i < number.length - 2 ; i ++){
        for(let j = i + 1 ; j < number.length -1 ; j++ ){
            for(let k = j + 1 ; k < number.length ; k++){
                answer = number[i] + number[j] + number[k] === 0 ? answer+1 : answer;
            }
        }
    }
    return answer;
}