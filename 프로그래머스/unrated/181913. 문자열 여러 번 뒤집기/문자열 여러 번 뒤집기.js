function solution(my_string, queries) {
    let answer = my_string;
    for(const [i, j] of queries){
        answer = answer.slice(0, i) + answer.slice(i, j + 1).split('').reverse().join('') + answer.slice(j + 1 , answer.length);
    }
    
    return answer;
}