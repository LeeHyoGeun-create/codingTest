function solution(numbers) {
    // 0~9 까지 배열을 만든 후
    // 그 배열을 순회하며 들어온 배열에 값이 있는지 확인
    // 없으면 더함.
    var answer = 0;
    const arr = [0,1,2,3,4,5,6,7,8,9];
    for(value of arr){
        if(!numbers.includes(value)) answer+=value; 
    }
    
    return answer;
}

/*
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

배열을 만들 필요가 없었다... 
for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

*/