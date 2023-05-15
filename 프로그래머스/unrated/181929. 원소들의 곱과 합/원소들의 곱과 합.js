function solution(num_list) {
    const mul = num_list.reduce((cur, val) => cur * val);
    const square = num_list.reduce((cur, val) => cur + val) ** 2;
    return mul < square ? 1 : 0;
}