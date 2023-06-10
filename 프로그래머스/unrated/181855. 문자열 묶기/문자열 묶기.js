function solution(strArr) {
    const lengthMap = new Map();
    for(const str of strArr){
        const strLength = str.length;
        if(lengthMap.has(strLength)){
            lengthMap.set(strLength, lengthMap.get(strLength) + 1);
            continue;
        }
        lengthMap.set(strLength, 1);
    }
    return Math.max(...Array.from(lengthMap.values()));
}