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


function isPrime(num){
        for(let i = 2; i * i<= num; i++){
            if(num % i == 0) return false;
        }
        return true;
    }