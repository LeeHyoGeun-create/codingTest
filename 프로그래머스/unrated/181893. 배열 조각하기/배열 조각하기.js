function solution(arr, query) {
    let answer = [...arr];
    for(let i = 0; i < query.length; i++){
        if(i % 2 === 0){
            answer = answer.splice(0, query[i] + 1);
            continue;
        }
        answer = answer.splice(query[i]);
    }
    return answer;
}