function solution(phone_number) {
    // 뒤에 4글자를 분리한 뒤
    // 앞에 사라진 수 만큼 *을 만들어 붙인다.
    var answer = '';
    const backNumber = phone_number.substring(phone_number.length-4);
    answer = new Array(phone_number.length - 4).fill('*').join('') + backNumber;
    // '*'.repeat(phone_number.length - 4) 이런 방법도 있음
    return answer;
}