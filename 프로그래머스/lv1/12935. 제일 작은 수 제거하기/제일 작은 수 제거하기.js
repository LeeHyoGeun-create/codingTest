function solution(arr) {
    // i와 j를 비교할 수 없으면 [-1]리턴
    // 가장 작은 값을 찾은 뒤
    // 해당 인덱스의 값을 제거
    if(arr.length === 1){
        return [-1];
    }
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr;
    
}