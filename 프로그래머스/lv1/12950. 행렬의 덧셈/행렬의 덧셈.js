function solution(arr1, arr2) {
    // 배열 전부를 순회하며
    // 값에 닿으면 해당 인덱스를 받아
    // answer에 넣음.
    var answer = [];
    arr1.forEach((innerArr, outIndex)=>{
        const newArr = [];
        innerArr.forEach((value, innerIndex)=>{
            newArr.push(arr1[outIndex][innerIndex] + arr2[outIndex][innerIndex]);
        })
        answer.push(newArr);
    })
    
    
    return answer;
}

/*
    A.map((a,i) => a.map((b, j) => b + B[i][j]));
*/