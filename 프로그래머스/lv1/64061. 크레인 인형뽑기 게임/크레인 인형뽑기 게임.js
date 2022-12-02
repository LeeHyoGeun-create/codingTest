function solution(board, moves) {
    // 같은 모양 2개면 사라짐
    // 인덱스와 같은 key 값을 갖는 객체를 만든 후
    // 해당 key 값에 따라 --를 해준다.
    // 그리고 basket 넣어주고
    // 연속된 값이 오면 처리
    let answer = 0;
    const basket = [];
    const obj = {};
    // 원할이 pop을 하기 위해 순서를 역전
    board.reverse();
    for(arr of board){
        // arr.reverse();
        arr.forEach((value, index)=>{   
        if(obj[index+1]){
            if(value)obj[index+1].push(value);
        } else{
            if(value)obj[index+1] = [value];
        } 
        
        })
        
    }
    // console.log(obj);
    for(value of moves){
        if(obj[String(value)].length){
            basket.push(obj[value].pop());
            // console.log(basket);
            if(basket[basket.length - 1] === basket[basket.length - 2]){
            basket.pop();
            basket.pop();
            answer += 2;
        }
        }
        
    }
    
    return answer;
}