function solution(numLog) {
    let answer = '';
    for(let i = 0; i < numLog.length; i++){
        const actValue = (numLog[i] - numLog[i+1]) * -1;
        switch(actValue){
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
        }
    }
    return answer;
}
