function solution(nums) {
    var answer = 0;
    for(let i = 0 ; i < nums.length - 2 ; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(k = j + 1; k < nums.length ; k++){
                answer += isPrime(nums[i] + nums[j] + nums[k]) ? 1 : 0;
            }
        }
    }
    
    return answer;
}

// https://myjamong.tistory.com/139
// 약수들로 봤을 때 root로 씌운 값이 중간값이 된다.
// 가독성을 위하여 제곱근 대신 i * i 
function isPrime(num){
        for(let i = 2; i * i<= num; i++){
            if(num % i == 0) return false;
        }
        return true;
    }