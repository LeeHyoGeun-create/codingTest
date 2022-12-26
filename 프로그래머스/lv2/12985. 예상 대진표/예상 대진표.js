const isOdd = (number) => {
    return number % 2 === 1;
}
const isEven = (number) => {
    return number % 2 === 0;
}
const matchUp = (number) => {
    if(isOdd(number)){
        return (number + 1) / 2
    }
    return number / 2;
}

function solution(n,a,b)
// 2명씩 나눠서 번호가 매겨짐
// 홀수인 경우 +1을 해서 나누기 2를 하면 다음 숫자가 나옴
// 짝수인 경우 나누기 2를 하면 그 위의 숫자가 나옴
// a, b가 짝을 이룰 때 answer의 값
// a, b를 정렬을 하고 홀수 짝수 쌍으로 되게 함. 1,2 3,4
{
    let answer = 0;
    if(a > b){
        [a,b] = [b,a];
    }
    while(true){
        if((isOdd(a) && isEven(b)) && a+1 === b){
            break;
        }
        a = matchUp(a);
        b = matchUp(b);
        answer++;
    }

    return answer + 1;
}