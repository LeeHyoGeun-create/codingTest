function solution(num_list) {
    const lastNum = num_list[num_list.length - 1];
    const prevNum = num_list[num_list.length - 2];
    
    return [...num_list, lastNum > prevNum ? lastNum - prevNum : lastNum * 2];
}