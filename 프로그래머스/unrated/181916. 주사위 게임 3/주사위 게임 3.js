function solution(a, b, c, d) {
    const answer = 0;
    const numObj = {};
    for(const num of Array.from(arguments)){
        numObj[num] = numObj[num] ? numObj[num] + 1 : 1;
    }
    const maxValue = Math.max(...Object.values(numObj));
    const maxKey = Object.keys(numObj).find((key) => numObj[key] === maxValue);
    const numObjLength = Object.keys(numObj).length;
    const otherKeys = Object.keys(numObj).filter((key) => key !== maxKey);
    switch(numObjLength){
        case 1:
            return 1111 * +maxKey;
        case 2:
            if(Object.values(numObj)[0] === Object.values(numObj)[1]){
                return (+maxKey + +otherKeys[0]) * Math.abs(+maxKey - +otherKeys[0]);
            }
            return (10 * +maxKey + +otherKeys[0]) ** 2;
        case 3:
            return +otherKeys[0] * +otherKeys[1];
        case 4:
            return Math.min(...Object.keys(numObj).map(Number));
    }
    return answer;
}