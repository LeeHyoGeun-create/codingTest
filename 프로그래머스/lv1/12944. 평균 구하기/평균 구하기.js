function solution(arr) {
    // 들어온 배열을 순회하며
    // length로 나눈 값을 더함
    var answer = 0;
    for(value of arr){
        console.log(value,  value / arr.length);
        answer += (value / arr.length);
    }
    return answer;
}