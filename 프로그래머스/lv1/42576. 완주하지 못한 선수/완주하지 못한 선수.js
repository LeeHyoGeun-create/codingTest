function solution(participant, completion) {
    // participant에서 completion을 지워나감
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