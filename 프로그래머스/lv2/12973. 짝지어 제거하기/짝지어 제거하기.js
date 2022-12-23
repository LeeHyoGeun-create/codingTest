function solution(s)
{
// 스택을 만들고
// 하나씩 넣으며 이전 값과 같으면 pop을 하고 현재 값은 넘어감
    const stack = [];
    for(const value of s){
        if(value === stack.at(-1)){
            stack.pop();
            continue;
        }
        stack.push(value);
    }

    return stack.length === 0 ? 1 : 0;
}