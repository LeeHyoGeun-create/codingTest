const getCoordinate = (n, index) => {
    return [Math.floor(index / n) , index % n]; 
}

const getValue = (n, index) => {
    return Math.max(...getCoordinate(n,index)) + 1;
}

function solution(n, left, right) {
    // [0, 0] === 1, [0, 1] === 2
    // 사각형일 때 좌표의 더 큰 값 + 1
    // 인덱스를 바탕으로 좌표값을 구해서 for문을 돌며 값을 추가
    // 인덱스를 바탕으로 좌표값을 구하는 법
    // row: index / n, col: index % n
    // slice(left, rigth)
    var answer = [];
    for(let i = left; i <= right; i++){
        answer.push(getValue(n,i));
    }
    return answer;
}