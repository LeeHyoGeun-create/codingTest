// 순회하면서 해당 인덱스에 값이 있으면 +1
const sortStages = (N,stages) => {
    const newArr = new Array(N+1).fill(0);
    for(value of stages){
        newArr[value-1] = newArr[value-1] + 1 ;
    }
    return newArr;
}

// 순회하면서 분자의 값은 인덱스에서 꺼내고
// 분모의 값은 이전 분자의 값들을 빼나감.
const getFailureRates = (sortedStages, people)=>{
    let denominator =  people;
    let index = 1;
    const newArr = [];
    for(const num of sortedStages){
        // 정렬해도 인덱스를 기억하기 위해 객체로 담았다.
        const newObj = {
            'index' : index,
            'value' : num / denominator
        };
        newArr.push(newObj);
        denominator = denominator - num;
        index++;
    }
    // 마지막은 마지막 스테이지 클리어 여부니깐 스테이지가 아님
    return newArr.slice(0, newArr.length-1);
}

function solution(N, stages) {
    // 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 전체 스테이지의 개수 N
    // 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stage
    // 스테이지에 도달한 플레이어 수 === 전체 플레이어 수 - 이전 스테이지 클리하지 못한     // 수
    // 멈춰있는 스테이지별 배열을 만든다.
    // 실패율을 모아놓은 배열을 만든다.
    
    
    const answer = [];
    const sortedStages = sortStages(N,stages);
    console.log(sortedStages);
    const failureRates = getFailureRates(sortedStages, stages.length)
    console.log(failureRates);
    failureRates.sort((a , b)=>{
        if(a.value > b.value){
            return -1;
        } 
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });
    
    // 정렬된 객체 배열의 index 값을 순서대로 담아준다.
    for(obj of failureRates){
        answer.push(obj['index']);
    }
    
    return answer;
}



