// {(}) 과 같은 경우를 걸러낼려면 stack을 사용해야 할 것 같다.
// const isWrongColse = (...rest){
//     // 닫힐 때 내부에 불완전한 괄호가 있으면 안됨.
//     const isUnclosed = (currentValue) => currentValue > 0;
//     return rest.some(isUnclosed)
// }

// const isCorrect = (...rest) => {
//     return !Boolean(Number(rest.join('')));
// }

const isMinus = (...rest) => {
    // 화살표 함수는 arguments 객체가 없다.
    const isMinus = (currentValue) => currentValue < 0;
    return rest.some(isMinus)
}

// const checkCorrectBracket = (str) => {
//     // "{"일 경우 +1을 해주고 "}"일 경우 -1을 해줌
//     // 값이 -1일 경우 false를 반환
//     // 최종에 값이 0일 경우 true를 반환
//     let small = 0;
//     let middle = 0;
//     let large = 0;
//     for(const char of str){
//         switch(char){
//             case '(':
//                 small++;
//                 break;
//             case ')':
//                 small--;
//                 break;
//             case '{':
//                 middle++;
//                 break;
//             case '}':
//                 middle--;
//                 break;
//             case '[':
//                 large++;
//                 break;
//             case ']':
//                 large--;
//                 break;
//         }
//         if(isMinus(small, middle, large)) return false;
//     }
    
//     return isCorrect(small, middle, large);
// }

const checkCorrectBracket = (str) => {
    const stack = [];
    let small = 0;
    let middle = 0;
    let large = 0;
    for(const char of str){
        switch(char){
            case '(':
                small++;
                stack.push(char);
                break;
            case ')':
                small--;
                if(stack.at(-1) === "("){
                    stack.pop();
                    continue;
                }
                break;
            case '{':
                middle++;
                stack.push(char);
                break;
            case '}':
                middle--;
                if(stack.at(-1) === '{'){
                    stack.pop();
                    continue;
                }
                break;
            case '[':
                large++;
                stack.push(char);
                break;
            case ']':
                large--;
                if(stack.at(-1) === '['){
                    stack.pop();
                    continue;
                }
                break;
        }
        if(isMinus(small, middle, large)) return false;
    }
    return !Boolean(stack.length)
}

function solution(s) {
    // 저번에 올바른 괄호 체크하는 문제
    // s의 length만큼 한칸씩 회전해 주면 됨
    // 회전 === 앞에걸 맨 뒤로 보낸다.
    // "{(})" 이런식으로 괄호가 물려있는 경우에는 안된다고 함.
    var answer = 0;
    let newStr = s;
    for(let i = 0; i < s.length; i++){
        newStr =  newStr.slice(1) + newStr.charAt(0);
        checkCorrectBracket(newStr) && answer++;
    }
    return answer;
}

solution("[{]}");