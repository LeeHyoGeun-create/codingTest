function solution(arr) {
    let answer = -1;
    let curArr = [...arr];
    let prevArr = [];
    
    const checkEqual = (arr1, arr2) => {
        return arr1.join('') === arr2.join('');
    }
    
    while(!checkEqual(prevArr,curArr)){
        prevArr = curArr;
        curArr = curArr.map((element) => {
            if(element >= 50 && element % 2 === 0){
                return element / 2;
            }
            if(element < 50 && element % 2 !== 0){
                return (element * 2) + 1
            }
            return element;
        })
        answer++;
    }
    return answer;
}