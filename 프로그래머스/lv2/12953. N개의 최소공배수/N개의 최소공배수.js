const getGcd = (num1, num2) => {
    while( num2 > 0 ){
        let temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    }
    return num1;
}

function solution(arr) {
    const sortedArr = arr.sort((a,b)=>b-a);
    let answer = sortedArr[0];
    for(let i = 1; i < sortedArr.length ; i++){
        const GCD = getGcd(answer, arr[i]);
        const LCM = answer * arr[i] / GCD;
        answer = LCM;
    }
    return answer;
}

// const getDivisor = (number) => {
//     const newArr = [];
//     for(let i = 1 ; i * i <= number; i++){
//         if(number % i === 0){
//             newArr.push(i);
//             if(number / i !== i){
//                 newArr.push(number / i);
//             }
//         } 
//     }
//     return newArr;
// }

// function solution(arr) {
//     // 소인수들을 set 객체에 넣으면 최소공배수
//     const newSet = new Set();
//     let answer = 0;
//     for(const ele of arr){
//         console.log(getDivisor(ele));
//     }
//     console.log(newSet);
//     return answer;
// }