function solution(s, n) {
    // 배열을 만들고 해당 배열에서 index 값을 구한다
    // index 값에 n만큼 더해주는데 
    // index 값 안을 순회하도록 배열의 length 만큼 나눠주고 나머지를 취함
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const upperCase = [...lowerCase.join('').toUpperCase()];
    let answer = '';
    for(value of s){
        // 공백이면 공백 추가
        if(value === ' '){
            answer += ' ';
            continue;
        }
        // 소문자인지 확인
        if(value.toLowerCase() === value){
            // 배열의 길이로 나눠서 숫자가 커져도 배열 안쪽 인덱스를 맴돌게 함
            answer += lowerCase[(lowerCase.indexOf(value)+n) % lowerCase.length];
        } else{
            answer += upperCase[(upperCase.indexOf(value)+n) % upperCase.length]
        }
    }
    return answer;
}