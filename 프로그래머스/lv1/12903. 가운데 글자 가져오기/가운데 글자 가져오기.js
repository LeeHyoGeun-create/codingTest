function solution(s) {
    // 2로 나눴을 때 정수가 아니 때 올림하면 그 길이의 가운데 값
    // 나눠지면 짝수인 배열 그 길이를 index로 바꾸고 2개를 배출하게함.
    // 나눠지면 그 위치
    // 길이를 반으로 나누고 index로 바꿔줄려면 -1을 해줘야함.
    var answer = ''; 
    if(s.length % 2 === 0){
        const Index = s.length / 2 - 1;
        answer = s.slice(Index, Index + 2);
    } else{
        const Index = Math.ceil(s.length / 2) - 1;
        answer = s.slice(Index, Index +1);
    }
    return answer;
}

/*
function solution(s) {
    const index = Math.ceil(s.length / 2) - 1;
    return s.substring(index , s.length % 2 === 0 ? index + 2 : index + 1);
}

*/