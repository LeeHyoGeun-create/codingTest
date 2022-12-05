// function solution(k, score) {
//     const temp = [];
//     const answer = [];
    
//     for(value of score){
//         temp.push(value);
//         temp.sort((a,b)=>b-a);
        
//         if(temp.length < k){
//             answer.push(temp[temp.length-1]);
//         } else{
//             answer.push(temp[k-1]);
//         }
//     }
//     return answer;
// }

function solution(k, score) {
    // 상위 k번째
    // 배열을 만들고 점수에 맞게 배열에 넣어줌
    // 안에 들어가야하면 pop 그리고 sort
    // 매 차례마다 배열의 마지막 요소를 answer에 넣어줌
    const answer = [];
    //Hall of Fame
    const hof = [];
    for(let i = 0; i < score.length ; i++){
        const value = score[i];
        if(hof.length < k){
            hof.push(value);
            hof.sort((a,b)=>b-a);
        }
        else if(hof.slice(-1) < value){
            if(hof.length === k){
                hof.pop();
            }
            hof.push(value);
            hof.sort((a,b)=>b-a);
        }
      // console.log(hof);
      answer.push(hof[hof.length-1]);  
    }
    return answer;
}