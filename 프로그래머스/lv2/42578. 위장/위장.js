function solution(clothes) {
    var answer = 0;
    const obj = returnObj(clothes);
    answer = carculateNum(obj);
    return answer;
}

function returnObj(clothes) {
    // 의상의 종류별로 모음
    // i[0] 옷 이름
    // i[1] 옷 종류
    let obj = {};
    for(let i of clothes){
        if(obj.hasOwnProperty(i[1])){
            obj[i[1]].push(i[0]);
        } else{
            obj[i[1]] = [];
            obj[i[1]].push(i[0]);
        }    
    }
    return obj;
}

function carculateNum(obj){
    // 조합
    // a * b * c 
    // 
    let result = 1;
    // console.log(obj);
    for(element in obj){
        // 걸치지 않은 경우 포함해서 + 1 
        result = result * (obj[element].length + 1)
    }
    // 모두 다 걸치지 않는 경우는 없으니깐 - 1
    return result - 1;
}