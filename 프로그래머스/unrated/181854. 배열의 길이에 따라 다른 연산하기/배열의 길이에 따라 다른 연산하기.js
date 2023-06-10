function solution(arr, n) {
    return arr.map((value, index) => {
        if(arr.length % 2 === 0 ){
            return index % 2 !== 0 ? value + n : value;
        }
        return index % 2 === 0 ? value + n : value;
    });
}