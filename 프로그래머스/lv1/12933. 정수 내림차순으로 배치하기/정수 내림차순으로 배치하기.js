function solution(n) {
    // 배열로 바꾸고
    // 정렬하고 숫자로 바꿈
    var answer = 0;
    answer = Number(String(n).split('').map(Number).sort((a,b)=>b-a).join(''));
    return answer;
}