function solution(priorities, location) {
    
    let answer = 0;
    const sortedPriorities = [...priorities].sort((a,b)=> a-b);
    priorities = priorities.map(value=>[value]);
    priorities[location].push(1);
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
/*
function solution(priorities, location) {
    // 높은 가중치가 먼저 인쇄됨
    // 낮은 가중치일경우 뒤로 보내지게됨
    let answer = 0;
    const arr = [];
    const subArr = [];
    let topValue = Math.max(...priorities);
    console.log(topValue);
    
    for(const [index,prioritie] of priorities.entries()){
        arr.push([index,prioritie]);
    }
    
    
    while(arr.length > 0){
        const value = arr.shift();     
        if(value[1] < topValue){
            arr.push(value);
        } else{
            subArr.push(value);
            topValue = Math.max(...arr.map(element => element[1]));
        }      
    }
    
    answer = subArr.findIndex(element => element[0] === location) + 1;
    
    console.log(subArr);
    console.log(location ,answer);
    
    
    return answer;
}
*/