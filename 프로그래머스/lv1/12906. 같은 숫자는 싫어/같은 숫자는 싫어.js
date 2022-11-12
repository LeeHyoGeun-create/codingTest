function solution(arr)
// 이전값을 기억해서 다르면 넣고 아니면 무시
{
    let answer = [];
    let lastValue = '';
    for(value of arr){
        if(value !== lastValue){
            answer.push(value);
        }
        lastValue = value;
    }
    return answer;
}

/* 효율성 테스트 불통과
function solution(arr)
// 이전값을 기억해서 다르면 넣고 아니면 무시
// 리듀스를 사용해보자
{
    let answer = [];
    answer = arr.reduce((acc, cur)=> {
        if(acc[acc.length-1] !== cur){
            return [...acc,cur];
        } else {
            return acc;
        }
    } ,[])
    return answer;
}
*/

/* 중복배열을 없애는 건줄 알았다.
function solution(arr)
// 연속적으로 나타내는 배열
{
    var answer = [];
    const newSet = new Set(arr);
    answer = Array.from(newSet);
    return answer;
}
*/