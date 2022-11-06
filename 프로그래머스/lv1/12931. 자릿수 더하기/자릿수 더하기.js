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
    
    
    /*
        var sum = 0;

    do {
        sum += n%10;    // 일의 자리를 더하고
        n = Math.floor(n/10);   // 일의 자리수를 버림.
    } while(n > 0);

    return sum;
    */
}