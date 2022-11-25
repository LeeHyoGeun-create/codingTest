const rules = {
        S: 1,
        D: 2,
        T: 3,
        '*': 2,
        '#': -1,
};

const multiple = ['S','D','T'];
const award = ['*','#'];

function solution(dartResult) {
    // 숫자랑 S,D,T 랑 묶어야 된다.
    // 그리고 연산
    // [10,20,30] 과 같이 됨
    // 그리고 *, # 따라 연산   
    // *을 만나면 앞앞 배열과 앞배열에 *2
    // #을 만나면 앞배열에 -1
    let result = 0;
    const newArr = makeArr(dartResult);
    const valueArr = getValueArr(newArr);
    console.log(valueArr);
    const valueArrLength = valueArr.length;
    for(let i = 0 ; i <= valueArrLength ; i++){
        let value = valueArr[i];
        console.log(valueArr, value);
        if(value === undefined){
            break;
        }
        if(value === '*'){
            valueArr[i - 1] = valueArr[i - 1] * 2;
            if(valueArr[i - 2]){
                valueArr[i - 2] = valueArr[i - 2] * 2;
            }
            valueArr.splice(valueArr.indexOf('*'),1);
            i -= 1;
            continue;
        }
        if(value === '#'){
            valueArr[i - 1] = valueArr[i - 1] * -1;
            valueArr.splice(valueArr.indexOf('#'),1);
            i -= 1;
            continue;
        }
        
    }
    
    for(value of valueArr){
        result += value;
    }
    
    return result;
    
}



function makeArr(str){
    const arr = [];
    let number = '';
    for(value of str){
        if(award.includes(value)){
            arr.push(value);
            continue;
        }
        if( isNumber(value) ){
            number += value;
            continue;
        }
        arr.push(number + value);
        number = '';
    }
    return arr;
}

function calcPow(str){
    let number = '';
    for(value of str){
        if(!Number.isNaN(Number(value))){
            number += value;
            continue;
        }
        return Math.pow(Number(number),rules[value])
    }
}

function getValueArr(array){
    const arr = [];
    for(value of array){
        if(award.includes(value)){
            arr.push(value);
            continue;
        }
        arr.push(calcPow(value));
    }
    return arr;
}

function isNumber(value){
    return !Number.isNaN(Number(value));
}

// *이 현재 값만 두배로 만들어주는거라 생각함.
// function solution(dartResult) {
//     const rules = {
//         S: 1,
//         D: 2,
//         T: 3,
//         '*': 2,
//         '#': -1,
//     }
//     const multiple = ['S','D','T'];
//     const award = ['*','#'];
//     let answer = 0;
//     let number = '';
//     let middleValue = 1;
//     let flag = false;
//     for(value of dartResult){
//         if(flag && !Number.isNaN(Number(value))){
//            console.log(middleValue);
//            answer += middleValue;
//            middleValue = 1;
//            number = '';
//            flag = false;
//         }
        
//         if( !Number.isNaN(Number(value)) ){
//             number += value;
//             } 
//         if(multiple.includes(value)){
//             middleValue *= Math.pow(Number(number), rules[value]);
//             flag = true;
//             }
//         if(award.includes(value)){
//             middleValue *= rules[value];
//             }
//         }
    
//         if(value === dartResult[dartResult.length-1]){
//             console.log(middleValue);
//             answer += middleValue;
//         }
    
//         return answer;
//     }


// 10을 할 떄가 안됨
// function solution(dartResult) {
//     let result = 0;
//     let flag = false;
//     const rules = {
//         S: 1,
//         D: 2,
//         T: 3,
//         '*': 2,
//         '#': -1,
//     }
    
//     let middleValue = 1;
//     for(let i = 0; i < dartResult.length ; i++){
//         // 초기화 작업
//         if(flag && typeof Number(dartResult[i]) === 'number'){
//             result += middleValue;
//             middleValue = 1;
//         }
//         if(! Number.isNaN( Number( dartResult[i] ) ) ){
//             // typeof Number('#'); NaN으로 형변환 된다음 typeof 하면 number가 됨
            
//             console.log(dartResult[i]);
//             flag = true;
//             middleValue *= Math.pow(dartResult[i], rules[dartResult[i+1]]);
//             i = i+1;
//         } else {
//             console.log('a', dartResult[i]);
//             middleValue *= rules[dartResult[i]];
//         }
//     }
//     return result;
// }

// function solution(dartResult) {
//     // 3회
//     // 제곱, 세제곱
//     // Math.pow( 1, 2,3)
//     // 스타상 * 해당 점수와 바로 전의 얻은 점수 2배, 아차상 # 점수 마이너스
//     // 스타상과 아차상의 효과가 중첩되면 중첩된 아차상의 점수는 -2
//     // Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재
//     // 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
//     // 문자열을 들어온 기호에 따라 합산한다.
//     // 다음에 숫자가 나올때까지 곱하다가 숫자가 나오면 더함
//     var answer = 0;
//     let isAct = false;
//     const rules = {
//         S: 1,
//         D: 2,
//         T: 3,
//         '*': 2,
//         '#': -1,
//     }
//    for(let i = 0 ; i < dartResult.length ; i++){
//        let middleValue = 1;
//        while(true){
//         if(typeof dartResult[i] === 'number' && isAct){
//             i += 1;
//             break;
//         }
//         if(typeof dartResult[i] === 'number'){
//            isAct = true;
//            middleValue *= Math.pow(Number(dartResult[i]), rules[dartResult[i+1]]);
//            i = i+2;
//          } else {
//             middleValue *=  rules[dartResult[i]];
//             i = i+1;
//          }
//        }
//        answer += middleValue;
//    }
    
    
//     return answer;
// }