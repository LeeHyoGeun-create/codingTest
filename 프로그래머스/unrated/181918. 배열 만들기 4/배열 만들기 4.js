function solution(arr) {
    var stk = [];
    for(let i = 0; i < arr.length; i++){
        const lastSTK = stk[stk.length -  1];
        if(stk.length === 0){
            stk.push(arr[i]);
            continue;
        }
        if(lastSTK < arr[i]){
            stk.push(arr[i]);
            continue;
        }
        if(lastSTK >= arr[i]){
            stk.pop();
            i -= 1;
        }
    }
    return stk;
}