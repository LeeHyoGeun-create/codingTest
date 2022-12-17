const getObj = (s) => {
    const obj = {s : "", zeroNum : 0};
    for(const char of s){
        if(char === "0"){
            obj.zeroNum += 1;
            continue;
        }
        obj.s += char;
    }
    return obj;
}

function solution(s) {
    const answer = [0,0];
    while(parseInt(s,2) !== 1){
        const obj = getObj(s);
        s = obj["s"].length.toString(2);
        answer[1] += obj.zeroNum;
        answer[0] += 1;
    }
    return answer;
}
