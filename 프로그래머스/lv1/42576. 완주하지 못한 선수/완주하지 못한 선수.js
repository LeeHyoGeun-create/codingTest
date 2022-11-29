/*
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }
}
*/

// 배열을 객체처럼 사용
// function solution(participant, completion){
//     // const newObj = getObj(completion);
//     // console.log(newObj)
//     return participant.find((value)=> !completion[value]--, getObj(completion));
// }

// function getObj(arr){
//         // 비트 or 연산자
//         // (undefined | 0) + 1          1
//         // ('eden' | 0) + 1             1
//         // (1 | 1) + 1                  2
//         // https://stackoverflow.com/questions/6194950/what-does-the-single-pipe-do-in-javascript
//     arr.map((name)=> arr[name] = (arr[name] | 0) + 1);
//     console.log(arr);
// }


function solution(participant, completion) {
    const sortedParticipant = participant.sort();
    const sortedCompletion  = completion.sort();
    for(let i = 0 ; i < sortedParticipant.length ; i++ ){
        if(sortedParticipant[i] !== sortedCompletion[i]){
            return sortedParticipant[i];
        }
    }
}

// 효율성 테스트
// const removeEmpty = (value) => {
//     return !(value === '');
// }

// function solution(participant, completion) {
//     // participant에서 completion을 지워나감
//     for(value of completion){
//         const sameIndex = participant.findIndex((element) => {return element === value});
//         participant[sameIndex] = '';
//     }
//     return participant.filter(removeEmpty)[0];
// }

/*
function solution(participant, completion) {
    return participant.find(
    (name) => !completion[name]--,
    completion.map((name) => completion[name] = (completion[name] || 0) +1));               
}
*/