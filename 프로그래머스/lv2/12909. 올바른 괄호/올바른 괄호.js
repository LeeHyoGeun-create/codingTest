function solution(s){
   // 스텍을 만들고
   // 스택의 끝 부분을 조사해서
   // "()" 쌍이 맞춰질 경우 poppop;
   // 스택이 비어있으면 true
   // 아니면 false
    const stack = [];
    for(const value of s){  
        stack.push(value);
        while(stack[stack.length-2] + stack[stack.length-1] === "()"){
            stack.pop();
            stack.pop();
            continue;
        }  
        
    }
    return stack.length === 0 ? true : false;
}