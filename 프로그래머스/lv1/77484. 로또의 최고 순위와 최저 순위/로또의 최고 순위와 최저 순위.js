const LOTTORANK = new Map([[6,1],[5,2],[4,3],[3,4],[2,5]]);

function solution(lottos, win_nums) {
    // 가려진 부분을 0으로 표시
    // 최고순위 0으로 된 부분만큼 다 맞는 것
    // 최저순위 0으로 된 부분만큼 다 틀리는 것
    // 기존의 것 카운트 하고 0으로 된 것 +, - 
    // 순위 찾기
    const answer = [];
    const baseCountNum = lottos.filter(value=>isMatch(value,win_nums)).length;
    const zeroCount = lottos.filter(isZero).length;
    console.log(baseCountNum, zeroCount);
    // a ?? b
    //a가 null도 아니고 undefined도 아니면 a
    //그 외의 경우는 b
    answer.push(LOTTORANK.get(baseCountNum + zeroCount) ?? 6);
    answer.push(LOTTORANK.get(baseCountNum) ?? 6);
    return answer;
}

function isMatch(value, win_nums){
    return win_nums.includes(value);
}

function isZero(value){
    return value === 0;
}

/*
const rank = [6, 6, 5, 4, 3, 2, 1]; 이런식으로 할 수도 있음.
*/