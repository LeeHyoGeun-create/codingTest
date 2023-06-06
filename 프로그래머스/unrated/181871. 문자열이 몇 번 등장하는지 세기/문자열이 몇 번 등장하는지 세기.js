function solution(myString, pat) {
    let answer = 0; 
    for(let i = 0; i < myString.length ; i++){
        const finedIndex = myString.indexOf(pat, i);
        if(finedIndex === -1){
            break;
        }
        i = finedIndex;
        answer += 1;
    }
    return answer;
}