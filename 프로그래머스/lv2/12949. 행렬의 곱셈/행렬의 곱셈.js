function solution(arr1, arr2) {
    // [[1, 4],
    //  [3, 2],
    //  [4, 1]]
    var answer = [];
    for(let i = 0; i < arr1.length ; i++){
        for(let j = 0; j < arr2[0].length; j++){
            let temp = 0;
            for(let k = 0; k < arr2.length; k++){
                // console.log(i,j,k);        
                temp += arr1[i][k] * arr2[k][j];
                // console.log(arr1[i][k], arr2[k][j], temp);
            }
            // console.log("------");
            if(!answer[i]) answer.push([]);
            answer[i].push(temp);
        }
    }
    return answer;
}