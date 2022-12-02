function solution(X, Y) {
    // 객체를 만들고
    // 0~9 까지의 인덱식하고 개수별로 카운트를 해줌
    // 중복된 값이 있으면 그 값을 배열에 넣고 인덱스에 -1을 해줌
    // 배열에 있는 값을 sort하고 리턴
    const arr = [];
    const objX = {};
    for(value of X){
        // 비트 연산자 | 
        objX[value] = (objX[value] | 0) + 1;
    }
    for(value of Y){
        if(objX[value]){
            arr.push(value);
            objX[value]--;
        } 
    }
    // console.log(objX);
    // console.log(arr);
    let result = arr.sort((a,b)=>b-a).join('');
    if(result){
        // if(Number(result) === 0) return '0';
        // return result;
        // 이게 문제였네
        return String(Number(result));
    }
    return '-1'
}

// function solution(X, Y) {
//     // 중복으로 있는 것의 인덱스를 찾고
//     // splice로 찾은 인덱스의 값을 가져온다.
//     // sort로 최대값을 만들어주고
//     // 반환
//     const arr = [];
//     const arrX = [...X];
//     const arrY = [...Y];
//     let answer = '';
//     for(let i = 0; i < arrX.length ; i++){
//         if(arrY.includes(arrX[i])){
//             arr.push(arrY.splice(arrY.indexOf(arrX[i]),1));
//         }    
//     }
//     console.log(arrY);
//     answer = arr.sort((a,b)=>a-b).reverse().join('');
//     if(answer){
//         // 00인 경우를 해결
//         return String(+answer);
//     }
    
//     return '-1';
//     // "00"인경우를 해결하지 못함.
//     // return arr.sort((a,b)=>a-b).reverse().join('') || '-1';
// }