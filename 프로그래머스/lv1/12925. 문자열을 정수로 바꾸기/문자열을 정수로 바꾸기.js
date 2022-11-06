function solution(s) {
    // 앞에 부호가 있는지 판독하고 있으면 잘라서 보관
    // 문자열을 숫자로 변환 후 리턴
    let sign = '';
    
    
    if(Number.isNaN(Number(s[0]))){
        console.log(1,sign);
        sign = s.substring(0,1);
    }
    
    if(sign === '+'){
        return Number(s.substring(1));
    } else if(sign === '-'){
        return -Number(s.substring(1));
    }
    return Number(s);
}