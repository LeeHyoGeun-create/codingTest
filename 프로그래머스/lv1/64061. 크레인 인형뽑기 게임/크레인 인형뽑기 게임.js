/*
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
*/

// const transpose = matrix =>
//     matrix.reduce(
//         (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
//         []
//     );

// const solution = (board, moves) => {
//     const stacks = transpose(board).map(row =>
//         row.reverse().filter(el => el !== 0)
//     );
//     const basket = [];
//     let result = 0;

//     for (const move of moves) {
//         const pop = stacks[move - 1].pop();
//         if (!pop) continue;
//         if (pop === basket[basket.length - 1]) {
//             basket.pop();
//             result += 2;
//             continue;
//         }
//         basket.push(pop);
//     }

//     return result;
// };


function solution(board, moves) {
    // 같은 모양 2개면 사라짐
    // 인덱스와 같은 key 값을 갖는 객체를 만든 후
    // 해당 key 값에 따라 --를 해준다.
    // 그리고 basket 넣어주고
    // 연속된 값이 오면 처리
    let answer = 0;
    const basket = [];
    const obj = {};
    // 원할이 pop을 하기 위해 순서를 역전
    board.reverse();
    for(arr of board){
        // arr.reverse();
        arr.forEach((value, index)=>{   
        if(obj[index+1]){
            // value가 0인 경우를 결러줌
            if(value)obj[index+1].push(value);
        } else{
            if(value)obj[index+1] = [value];
        } 
        
        })
        
    }
    // console.log(obj);
    for(value of moves){
        if(obj[String(value)].length){
            basket.push(obj[value].pop());
            // console.log(basket);
            if(basket[basket.length - 1] === basket[basket.length - 2]){
            basket.pop();
            basket.pop();
            answer += 2;
        }
        }
        
    }
    
    return answer;
}



