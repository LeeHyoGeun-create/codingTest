const cache = {'1' : 1, '2': 2, '3': 3, '4': 3, '5' : 2, '6' : 4, '7' : 2, '8' : 4, '9' : 2, '10' : 4};

function solution(MIN_NUMBER_IN, MAX_NUMBER_IN) {
    // 각 수의 사이를 for문으로 돌며 값을 누적
    var answer = 0;
    for(let i = MIN_NUMBER_IN ; i <= MAX_NUMBER_IN ; i++){
        // console.log(cache, countDivisor(i));
        if(isOdd(countDivisor(i))){
           answer -= i;
           continue;
        }
        answer += i;
    }
    return answer;
}

// 홀수 짝수 판별
// 2로 나눠지면 false
// 아니면 true
function isOdd(num){
    if(num % 2 === 0){
        return false;
    }
    return true;
}

// Number.isInteger(Math.sqrt(i)) 제곱근이 정수면 약수는 홀수
// 16 1 2 4 8 16 약수는 대칭인데 
// 제곱근이 정수면 4처럼 사이에 하나 들어감

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



// function countDivisor(num){
//     let count = 0;
//     for(let i = Math.floor(Math.sqrt(num)) ; i > 0  ; i--){  
//     if(cache[i]){
//             count += cache[i];
//             break;
//          }
        
//         if(num % i === 0){
//             count++;   
//             if(num / i !== i) count++;
//         }
        
//     }
//     // cache.num = cache.num ? cahe.num : count;
//     // https://www.youtube.com/watch?v=VhNVd1YEUd4
//     cache[num] ??= count;
//     return count;
// }