const isSafeArea = (x, y, array) => {
    if(array[x] === undefined) return false;
    return array[x][y]  === 0;
}

const controlMine = (x, y, array) => {
    // 상 : x - 1
    // 하 : x + 1
    // 좌 : y - 1
    // 우 : y + 1
    // 좌상 : x - 1, y - 1
    // 우상 : x - 1, y + 1
    // 좌하 : x + 1, y - 1
    // 우하 : x + 1, y + 1
    // 이미 바뀌었거나 1이면 건들지 않는다.
    
    array[x][y-1] === 0 && (array[x][y-1] = 2);
    array[x][y+1] === 0 && (array[x][y+1] = 2);
    
    if(x - 1 >= 0){
        array[x-1][y] === 0 && (array[x-1][y] = 2);
        array[x-1][y-1] === 0 && (array[x-1][y-1] = 2);
        array[x-1][y+1] === 0 && (array[x-1][y+1] = 2);
    }
    
    if(x + 1 < array.length){
        array[x+1][y] === 0 && (array[x+1][y] = 2);
        array[x+1][y-1] === 0 && (array[x+1][y-1] = 2);
        array[x+1][y+1] === 0 && (array[x+1][y+1] = 2);
    }
    
    
}

function solution(board) {
    // 배열을 순회하며 
    // 1을 만났을 경우 상하좌우 대각선 방향의 칸에
    // 다른 표시를 넣어주고
    // 0의 개수를 샌다.
    // [x, y]
    const rowLength = board.length;
    const colLength = board[0].length;
    for(let i = 0; i < rowLength ; i++){
        for(let j = 0; j < colLength; j++){
            if(board[i][j] === 1){
                controlMine(i,j, board);
            } 
        }
    }
    
    
    return board.flat(1).filter((element) => element === 0).length;
}