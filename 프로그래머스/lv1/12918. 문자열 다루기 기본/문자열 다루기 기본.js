function solution(s) {
    // 문자열의 길이가 4 혹은 6인지 확인하는 함수
    // 모두가 숫자인지 확인하는 함수.
    return isFourOrSix(s) && isNumber(s);
}

function isFourOrSix(s){
    return s.length === 4 || s.length === 6;
}

function isNumber(s){
    // Number('0xf5') Number('2e-5') 이런거 숫자로 변환됨.
    // return !Number.isNaN(Number(s));
    let result = true;
    for(value of s){
        console.log(value, Number(value));
        if(Number.isNaN(Number(value))){
            result = false;
        }
    }
    return result;
}

