function solution(a, b) {
    // 기준일로부터 몇일을 더 지나갔는지 확인
    // 인덱스를 0부터 시작해서 a - 1와 같아질 때까지 days[i]의 값들을 더함
    // countDays에 b - 1을 한 값을 더함
    // 인덱싱을 함
    const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const days = [31,29,31,30,31,30,31,31,30,31,30,31];
    let countDays = 0;
    for(let i = 0; i < (a - 1)  ; i++){
        countDays += days[i];
    }
    
    countDays +=  b-1;
    const answer = week[countDays % week.length];
    
    return answer;
}