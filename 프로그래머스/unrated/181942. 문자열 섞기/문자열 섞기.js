function solution(str1, str2) {
    let answer = '';
    for(let i = 0; i < str1.length + str2.length; i++){
        const index = Math.floor(i / 2)
        if(i % 2 === 0){
            answer += str1[index];
            continue;
        }
        answer += str2[index];
    }
    return answer;
}