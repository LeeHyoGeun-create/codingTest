function solution(x) {
    // x의 자리수 합을 구한다.
    // 나눠보고 맞으면 true
    // 아니면 false를 리턴한다.
    var answer = true;
    let sumValue = [...x.toString()].map(Number).reduce((acc,cur)=>acc + cur,0);
    console.log(sumValue);
    if(x % sumValue === 0){
        return true;
    } 
    return false;
}