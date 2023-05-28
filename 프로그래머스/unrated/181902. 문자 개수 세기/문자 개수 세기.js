function solution(my_string) {
    const answer = Array(52).fill(0);
    const lowerCaseIndex = 26;
    const lowerCaseStartIndex = 97;
    const upperCaseStartIndex = 65;
    for(const char of my_string){
        const charCode = char.charCodeAt(0);
        if(char.toUpperCase() === char){
            answer[charCode - upperCaseStartIndex] += 1;
            continue;
        }
        answer[lowerCaseIndex + charCode - lowerCaseStartIndex]+= 1;
    }
    return answer;
}