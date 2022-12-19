const getPairDivisor = (yellow) => {
    const pairDivisors = [];
    for(let i = 1 ; i <= Math.sqrt(yellow) ; i++){
        if(yellow % i === 0) {
            if(yellow / i === i){
                pairDivisors.push([i, i]);
                continue;
            }
            pairDivisors.push([yellow / i, i]);
        }
    }
    return pairDivisors;
}



function solution(brown, yellow) {
    //완전탐색은 간단히 가능한 모든 경우의 수를 다 체크해서 정답을 찾는 방법이다. 즉, 무식하게 가능한 거 다 해보겠다는 방법을 의미한다.
    // 노란색 약수의 순서쌍 중에
    // 가로의 길이가 같거나 더 크다고 함.
    // brown === (a+2) * (b+2) - yello를 만족하는 값
    // 순서쌍을 담은 배열을 가져온다
    // 순서쌈을 담은 배열을 위의 조건에 맞쳐본다
    // 조건에 맞은 a,b에 각 +2씩 해서 리턴
    var answer = [];
    pairDivisors = getPairDivisor(yellow);
    for(const arr of pairDivisors){
        if( brown === ((arr[0]+2) * (arr[1]+2) - yellow) ){
            return [arr[0]+2,arr[1]+2]
        }
    }
}