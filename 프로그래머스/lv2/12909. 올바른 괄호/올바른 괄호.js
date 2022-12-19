function solution(s){
  
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