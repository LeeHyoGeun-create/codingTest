function solution(n)
{
    // string으로 변환 후
    // 각 자리수의 합을 더한다.
    
    var answer = 0;
    const stringNum = String(n);
    for(value of stringNum){
        answer += Number(value);
    }
    
    return answer;
}