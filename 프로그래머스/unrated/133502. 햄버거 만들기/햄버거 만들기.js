function solution(ingredient) {
    // 스택을 이용하여 푼다.
    // 1을 만났을 때 뒤에 123이 있으면 지워주고
    // count를 올려줌
    const hamburger = "1231";
    let answer = 0;
    let arr = [];
    for(let i = 0; i < ingredient.length ; i++){
        if(ingredient[i] === 1 && arr.slice(arr.length -3).join('') === "123"){
            arr.pop();
            arr.pop();
            arr.pop();
            answer++;
            continue;
        }
        arr.push(ingredient[i]);
    } 
    return answer;
}



// 논리가 잘 생각이 안납니다.
// function solution(ingredient) {
//     let answer = 0;
//     const hamburger = ["1","12","123","1231"];
//     const arr = [];
//     let index = 0;
//     for(const value of ingredient){
//         const strValue = String(value);
//         const burgerIndex = hamburger.indexOf((arr[index] || '') + strValue);
//         if(hamburger.includes((arr[index - 1] || '') + strValue)){
//             index--;
//             arr[index] = (arr[index] || '') + strValue;
//             if(arr[index] === hamburger[3]){
//                 answer++;
//                 index--;
//             }
//         } else{
//             arr[index] = (arr[index] || '') + strValue;
//         }
//         index++;
//     }
//     console.log(arr);
//     return answer;
// }


// function solution(ingredient) {
//     // split, join을 이용하여 안쪽의 값을 제거해보자
//     let answer = 0;
//     const hamburger = "1231";
//     let str = ingredient.join('');
//     while(true){
//         // console.log(str);
//         let count = 0;
//         let pos = str.indexOf(hamburger);
//         while(pos !== -1){
//             // console.log("count");
//             count++;
//             pos = str.indexOf(hamburger, pos + hamburger.length);
//         }
//         answer += count;
//         str = str.split(hamburger).join('');  
//         // str = str.replaceAll(hamburger, '');
//         if(!count) break;
//     }
    
//     return answer;
// }