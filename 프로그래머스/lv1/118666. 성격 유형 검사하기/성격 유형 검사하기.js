// 4 - choice를 하면 방향성과 값이 모두 나옴
const getValue = (category, choice) => {
    const value = 4 - choice;
    if(value < 0){
        return [category[1], Math.abs(value)]
    }
    if(value > 0){
        return [[category[0]] ,value]
    }
}

function solution(survey, choices) {
    // 질문에 따라 네오형이 동의, 어피치형이 비동의인 경우도 주어질 수 있습니다.
    // 단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.
    // 8가지 유형의 객체를 만든다.
    // 지표와 선택을 순회한다
        // 지표와 선택을 이용하여 객체를 반환하는 함수를 만든다.
            // 가운데를 기준으로 가까운 곳에 있는 알파벳쪽으로 점수를 줌
            // 점수가 없는 경우 그냥 나온다
            // 점수와 향한 알파벳의 배열을 리턴
        // 나온 값을 객체에 누적한다.
    // 대응되는 유형의 값을 비교하여 유형을 가져온다
    // 이때 값이 같으면 사전순으로 선택한다.
    const obj = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0};
    const objKeys = Object.keys(obj);
    let answer = "";
    for(let i = 0 ; i < survey.length ; i++){
        const valueArr = getValue(survey[i], choices[i]);
        if(valueArr){
            obj[valueArr[0]] += valueArr[1];
        }
    }
    // 두개를 비교할 때 사전순으로 되게 객체에 넣어놔서
    // 두번째께 큰 경우에만 두번째 값이 들어간다
    for(let i = 0 ; i < objKeys.length ; i = i + 2){
        const firstKey = objKeys[i];
        const secondKey = objKeys[i+1];
        if(obj[secondKey] > obj[firstKey]){
            answer += secondKey;
            continue;
        }
        answer += firstKey;
    }
    
    
    return answer;
}
    



