function solution(arr) {
    function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) == 0;
}
    
    while(!isPowerOfTwo(arr.length)){
        arr.push(0);
    }
    
    return arr;
}