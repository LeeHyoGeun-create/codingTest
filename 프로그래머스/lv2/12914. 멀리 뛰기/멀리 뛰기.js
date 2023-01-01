const factorial = (n) => {
    if(n === 0) return BigInt(1);
    let num = BigInt(1);
    let a = BigInt(n);
    while(a != BigInt(1)){
        num *= a ;
        a = a -  1n;
    }
    return num ;
}

function solution(n) {
    // https://bhsmath.tistory.com/153
    // n개를 나열하는 방법 n!/ 같은거 3개를 나열하는 법 3!, 같은거 2개를 나열하는 법 2!
    // 2 2, 1, 1, 1 
    // 5!/(3! * 2!) = 10
    // 묶음을 구하는 공식?
    // 두개씩 뽑는 경우 n / 2 
    // n이 4일 경우 2, 1, 0 묶음 수가 다음과 같이 선택됨.
    // 2, 2 2
    // 1, 1 1 2, 1 2 1, 2 1 1
    // 0, 1 1 1 1
    // n 3
    // 1, 2 1, 2 1
    // 0  1 1 1
    let answer = BigInt(0);
    const maxTwoNum = Math.floor(n / 2);
    for(let twoNum = 0 ; twoNum <= maxTwoNum ; twoNum++){
        const oneNum = n - (twoNum * 2)
        const length = twoNum + oneNum;
        const value = factorial(length) / (factorial(oneNum) * factorial(twoNum));
        answer += value;
    }
    return Number(answer % BigInt(1234567));
}