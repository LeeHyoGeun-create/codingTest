function solution(n, m) {
    // 두 값을 정렬
    // 최소공배수와, 최대공약수 구하기
    const minNum = Math.min(...arguments);
    const maxNum = Math.max(...arguments);
    const GCD = euclideanAlgorithm(minNum,maxNum)
    const LCM = getLCM(minNum, maxNum, GCD);
    const answer = [GCD , LCM]
    
    return answer;
}

// 최소공배수
function getLCM(minNum, maxNum, GCD){
    return minNum * maxNum / GCD;
}

// 유클리드 호제법 최대 공약수 구하기
function euclideanAlgorithm(maxNum,minNum){
    if(maxNum % minNum === 0){
        return minNum;
    }
    return euclideanAlgorithm(minNum,maxNum%minNum)
}