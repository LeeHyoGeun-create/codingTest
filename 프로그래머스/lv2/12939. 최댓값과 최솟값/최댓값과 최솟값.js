function solution(s) {
    // 최대값과 최소값을 넣을 수 있는 변수를 선언한다.
    // 문자열을 공백으로 나누고 최대값과 최소값을 비교한다.
    // 최종적으로 선별된 최대값과 최소값을 문자열에 넣어 리턴
    let lower = Infinity;
    let higher = -Infinity;
    for(let value of s.split(' ')){
        value = +value;
        if(lower > value){
            lower = value;
        }
        if(higher < value){
            higher = value;
        }
    }
    return lower + " " + higher;
}