function solution(num_list) {
    let answer = 0;
    if(num_list.length >= 11){
        for(const num of num_list){
            answer += num;
        }
        return answer;
    }
    answer = 1;
    for(const num of num_list){
            answer *= num;
    }
    return answer;
}