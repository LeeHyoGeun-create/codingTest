function solution(my_string, indices) {
    let answer = '';
    const my_stringArr = [...my_string];
    for(const index of indices){
        my_stringArr[index] = '';
    }
    return my_stringArr.join('');
}