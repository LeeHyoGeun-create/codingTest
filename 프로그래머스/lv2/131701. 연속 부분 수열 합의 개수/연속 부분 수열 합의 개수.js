const getSum = (number , arr) => {
    const sumArr = [];
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < number; j++){
            sum += arr[(i + j) % arr.length];
        }
        sumArr.push(sum);
    }
    return sumArr;
}

function solution(elements) {
    let mySet = new Set();
    
    for(let i = 0; i < elements.length; i++){
        getSum(i + 1,elements).map(item => mySet.add(item));
    }
    
    return mySet.size;
}