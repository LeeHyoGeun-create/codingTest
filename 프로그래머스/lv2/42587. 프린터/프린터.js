// function solution(priorities, location) {
//     var list = priorities.map((t,i)=>({
//         my : i === location,
//         val : t
//     }));
//     var count = 0;        
//     while(true){
//         var cur = list.splice(0,1)[0];        
//         if(list.some(t=> t.val > cur.val )){
//             list.push(cur);                        
//         }
//         else{            
//             count++;
//             if(cur.my) return count;
//         }
//     }
// }

function solution(priorities, location) { 
    // shift, push를 하지 않기위해 index로 순회
    // 최대값을 추적하기 위해 높은 순으로 정렬된 배열을 만들음
    // 끝 값과 중요도를 비교하고 출력을 하게될 경우 하나씩 pop
    // 원하는 값을 출력헀다는 표시를 하기 위해 배열로 바꾸고 새로운 값을 push
    let answer = 0;
    const sortedPriorities = [...priorities].sort((a,b)=> a-b);
    priorities = priorities.map(value=>[value]);
    priorities[location].push(1);
    console.log(priorities);
    let prioritiesLength = priorities.length;
    let index = 0;
    let end = undefined; 
    while(end === undefined){      
        if(priorities[index][0] >= sortedPriorities.at(-1)){
            answer++;
            sortedPriorities.pop();
            end = priorities.splice(index,1)[0][1];     
            prioritiesLength = priorities.length;
            index--;
        }
        index = ++index % prioritiesLength;
    }
    return answer;
}

// function solution(priorities, location) {
//     // 높은 가중치가 먼저 인쇄됨
//     // 낮은 가중치일경우 뒤로 보내지게됨
//     let answer = 0;
//     const arr = [];
//     const subArr = [];
//     let topValue = Math.max(...priorities);
   
    
//     for(const [index,prioritie] of priorities.entries()){
//         arr.push([index,prioritie]);
//     }
    
    
//     while(arr.length > 0){
//         const value = arr.shift();     
//         if(value[1] < topValue){
//             arr.push(value);
//         } else{
//             subArr.push(value);
//             topValue = Math.max(...arr.map(element => element[1]));
//         }      
//     }
    
//     answer = subArr.findIndex(element => element[0] === location) + 1;
    

    
//     return answer;
// }
