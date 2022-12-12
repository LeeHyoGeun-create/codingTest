// const sumSkill = (arr) => {
//     return arr.reduce((acc,cur)=> {
//         if(cur === Infinity){
//             return acc;
//         } 
//         return acc+cur;
//     },0);
// }

function solution(n, k, enemy) {
    // 시간이 실패가 계속 나오니깐 최소 힙을 사용해 보자
    // 임시의 합을 담는 공간 temp를 만든다.
    // 무적권을 쓴 값을 담는 배열 skill을 만든다
    // 무적권의 총합과 n의 값의 합인 temp를 만든다.
    // enemy의 누적합인 enemySum을 만든다.
    // skill의 합을 구해주는 함수 sumSkill을 만든다.
    // enemy를 순회한다.
        // skill 배열의 길이가 k보다 작을 경우 계속 넣어주고 sort 해준다
        // skill 배열의 마지막 값보다 enemy의 값이 더 클 경우 있던 값을 pop해주고 큰 값을 push 해준다.
        // temp와 enemySum을 비교하여 temp가 작으면 멈춤
        // answer의 값을 올려준다.
    let answer = 0;
    const skill = new MinHeap();
    let skillSum = 0;
    let temp = 0;
    let enemySum = 0;
    for(let i = 0; i < enemy.length ; i++){
        if(skill.size() < k){
            // push
            skill.heappush(enemy[i]);
            skillSum += enemy[i];
        } else if(skill.getMin() < enemy[i]){
            // pop
            skillSum -= skill.heappop();
            skill.heappush(enemy[i]);
            skillSum += enemy[i];
        }
        temp = n + skillSum;
        enemySum += enemy[i];
        // console.log(skill, skillSum, enemySum);
        if(temp < enemySum){
            break;
        } 
        answer++; 
    }
    return answer;
}

class MinHeap {
    constructor() {
        this.heap = [ null ];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }
    
    heappush(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;
        
        while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }
    
    heappop() {
        const min = this.heap[1];	
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();   
        
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1; 
        
        if(!this.heap[leftIdx]) return min;
        if(!this.heap[rightIdx]) {
            if(this.heap[leftIdx] < this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

/* 매번 sort를 하여 마지막 값 빼고 넣기, 35.44ms 3, 6, 7, 10 시간초과
function solution(n, k, enemy) {
    // 무적권을 쓴 값을 담는 배열 skill을 만든다
    // 무적권의 총합과 n의 값의 합인 temp를 만든다.
    // enemy의 누적합인 enemySum을 만든다.
    // skill의 합을 구해주는 함수 sumSkill을 만든다.
    // enemy를 순회한다.
        // skill 배열의 길이가 k보다 작을 경우 계속 넣어주고 sort 해준다
        // skill 배열의 마지막 값보다 enemy의 값이 더 클 경우 있던 값을 pop해주고 큰 값을 push 해준다.
        // temp와 enemySum을 비교하여 temp가 작으면 멈춤
        // answer의 값을 올려준다.
    let answer = 0;
    const skill = [];
    let temp = 0;
    let enemySum = 0;
    for(let i = 0; i < enemy.length ; i++){
        if(skill.length < k){
            skill.push(enemy[i]);
            skill.sort((a,b)=>b-a);
        } else if(skill.at(-1) < enemy[i]){
            skill.pop();
            skill.push(enemy[i]);
            skill.sort((a,b)=>b-a);
        }
        temp = n + sumSkill(skill);
        enemySum += enemy[i];
        if(temp < enemySum){
            break;
        } 
        answer++; 
    }
    return answer;
}
*/

 // 해당 위치에 임의의 값을 할당. 52.32ms 3 6 7 9 10 실패
/*
function solution(n, k, enemy) {
    // 임시의 합을 담는 공간 temp를 만든다.
    // 무적권을 쓴 값을 담는 배열 skill을 만든다
    // 무적권의 총합과 n의 값의 합인 temp를 만든다.
    // enemy의 누적합인 enemySum을 만든다.
    // skill의 합을 구해주는 함수 sumSkill을 만든다.
    // enemy를 순회한다.
        // skill 배열의 길이가 k보다 작을 경우 계속 넣어주고 sort 해준다
        // skill 배열의 마지막 값보다 enemy의 값이 더 클 경우 있던 값을 pop해주고 큰 값을 push 해준다.
        // temp와 enemySum을 비교하여 temp가 작으면 멈춤
        // answer의 값을 올려준다.
    let answer = 0;
    const skill = [];
    let temp = 0;
    let enemySum = 0;
    for(let i = 0; i < enemy.length ; i++){
        const minValue = Math.min(...skill);
        if(skill.length < k){
            skill.push(enemy[i]);
        } else if(minValue < enemy[i]){
            const index = skill.findIndex((element) => element === minValue);
            skill[index] = Infinity;
            skill.push(enemy[i]);
        }
        temp = n + sumSkill(skill);
        enemySum += enemy[i];
        if(temp < enemySum){
            break;
        } 
        answer++; 
    }
    return answer;
}
*/
