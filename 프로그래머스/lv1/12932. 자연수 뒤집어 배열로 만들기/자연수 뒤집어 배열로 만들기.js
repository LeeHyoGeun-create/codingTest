function solution(n) {
    // n을 스트링으로 만들고
    // 배열로 만든 뒤
    // 뒤집음
    var answer = [];
    const stringN = String(n);
    console.log(stringN);
    const arrayN = stringN.split('').map(Number); // 배열로 바꾼 뒤
    // 각 배열 요소를 map을 통해 숫자로 바꾸고 반환.
    arrayN.reverse()
    answer = arrayN;
    
    return answer;
}