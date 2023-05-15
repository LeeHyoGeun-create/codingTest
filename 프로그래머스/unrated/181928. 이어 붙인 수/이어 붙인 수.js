function solution(num_list) {
    let odd = '';
    let even = '';
    for(const num of num_list){
        if(num % 2 === 0){
            even += num;
            continue;
        }
        odd += num;
    }
    return +odd + +even;
}