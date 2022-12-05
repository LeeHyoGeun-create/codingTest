function solution(number, limit, power) {
    // 각 숫자들의 약수의 개수 구하기
    // 제한보다 크면 협의한 수로 설정
    // 각 숫자 배열에 대한 값의 합을 구한다.
    let answer = 0;
    for(let i = 1; i <= number ; i++){
        const value = countDivisor(i);
        answer += value > limit ? power : value;
    }
    return answer;
}


// 제곱근으로 범위를 줄임
// 나눠지면 약수
    // cache에 값이 저장되어 있으면 count에 더하고 탐색 종료
// 나눠진 약수로 입력받은 값을 더하면 그것 또한 약수
// cache에 해당 약수가 없으면 값 등록
function countDivisor(num){
    let count = 0;
    for(let i = Math.floor(Math.sqrt(num)) ; i > 0  ; i--){        
        if(num % i === 0){
            count++;   
            if(num / i !== i) count++;
        }  
    }
    return count;
}