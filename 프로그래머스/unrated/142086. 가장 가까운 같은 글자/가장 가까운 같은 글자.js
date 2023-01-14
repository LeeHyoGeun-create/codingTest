const plusObjectValues = (obj) => {
    for(const [key, value] of Object.entries(obj)){
        obj[key] = value + 1;
    } 
    return;
}

function solution(s) {
    // 처음 만나는 문자 (객체의 키값으로 여부 확인) 0으로 초기화하고
    // answer 배열에 -1 push
    // 한칸씩 움직일 때 마다 그 객체의 모든 요소에 +1
    // 해당하는 값을 만났을 때 answer 배열에 들어있는 값을 넣고
    // 0으로 초기화
    const answer = [];
    const obj = {};
    for(const char of s){
        if(char in obj){
            answer.push(obj[char]);
            obj[char] = 0;
        } else{
            answer.push(-1);
            obj[char] = 0;
        }
        
        plusObjectValues(obj);
    }
    return answer;
}

/*
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}
*/