const getSortedNumArr = (str) => {
    const arr = str.split('},{')
    arr[0] = arr[0].slice(2);
    arr[arr.length -1] = arr[arr.length -1].slice(0,-2);
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split(',').map(Number);
    }
    return arr.sort((a,b)=> a.length - b.length);
}

function solution(s) {
    // 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)
    // 원소의 개수가 n개이고, 중복되는 원소가 없는 
    // 가장 짧은게 맨 앞
    // 가장 짧은거 기준으로 하나씩 앞의 배열과 비교해서 없는 부분을 넣어가면 됨
    let answer = [];
    const sortedNumArr = getSortedNumArr(s);
    answer.push(sortedNumArr[0][0]);
    for(let i = 0; i < sortedNumArr.length - 1; i++){
        let difference = sortedNumArr[i+1].filter(x => !sortedNumArr[i].includes(x));
        answer.push(difference[0]);
    }
    
    return answer;
}