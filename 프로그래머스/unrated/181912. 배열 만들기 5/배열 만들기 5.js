function solution(intStrs, k, s, l) {
    const answer = [];
    for(const intStr of intStrs){
        const slicedIntNum = +intStr.slice(s, s + l);
        if(slicedIntNum > k){
            answer.push(slicedIntNum);
        }
    }
    return answer;
}