function solution(answers) {
    // 각 수포자들의 패턴을 찾고
    // answer를 순회하며 count 값을 배열에 담아준다
    // 배열에서 가장 높은 것을 리턴
    const answer = [];
    const countArr = makeCountArr(answers);
    console.log(countArr);
    
    let countIndex = 1;
    for(value of countArr){
        // max value 값보다 크거나 같으면 최대값.
        if(value >= Math.max(...countArr)){
            answer.push(countIndex);
        }
        countIndex++;
    }
    return answer;
}

function makeCountArr(answers){
    const countArr = [0,0,0];
    const secondSupo = secondSupoWrraper();
    answers.forEach((value,index)=>{
        if(value === firstSupo(index)){
            countArr[0] += 1;
        }
        if(value === secondSupo(index)){
            countArr[1] += 1;
        }
        if(value === thirdSupo(index)){
            countArr[2] += 1;
        }
        
    });
    return countArr;
}
    
function firstSupo(index){
    const arr = [1,2,3,4,5];
    //  0   1   2   3   4   5   6   7   8   9
    //  1   2   3   4   5   0
    return arr[index % arr.length];
}

// 고차함수 써보자
function secondSupoWrraper (){
    let outerIndex = -1;
    return function (index){
                // 1  3 5 7 9 11 13 15  17  19  21 23 
                // 0  1 2 3 0  1  2  3  0    1  2  3
                // 1  3 4 5 1  3  4  5  1   3   4  5 
    const arr = [1,3,4,5];
    if(isEven(index)){
        outerIndex = outerIndex + 1;
    }
    const arrIndex = outerIndex % arr.length;
    return isEven(index) ? 2 : arr[arrIndex];
    }
}
    
function isEven(value){
    return value % 2 === 0;
}
    
function thirdSupo(index){
    // 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
    // 0   1   2   3   4   5   6   7   8   9   0   1   2   3   4   5
    // 3   3   1   1   2   2   4   4   5   5   3   3   1   1
    const arr = [3,3,1,1,2,2,4,4,5,5];
    return arr[index % arr.length]; 
}