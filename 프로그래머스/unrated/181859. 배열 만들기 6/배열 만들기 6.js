function solution(arr) {
    // i = 0 초기값
    // 빈 배열 : stk.push = arr[i], i++
    // stk 원소 있고, stk 마지막 원소가 arr[i]와 같으면 마지막 원소를 제거, i++
    // stk 원소 있고, stk 마지막 원소가 arr[i]와 다르면 마지막에 arr[i]를 추가, i++
    const stk = [];
    for(let i = 0; i < arr.length; i++){
        if(stk.length === 0){
            stk.push(arr[i]);
            continue;
        }
        if(stk.at(-1) === arr[i]){
            stk.pop();
            continue;
        }
        stk.push(arr[i]);
    }
    return stk.length === 0 ? [-1] : stk;
}