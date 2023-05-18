function getSuffixArr(my_string) {
    const suffixArr = [];
    for(let i = 0; i < my_string.length ; i++){
        suffixArr.push(my_string.slice(i));
    }
    suffixArr.sort();
    return suffixArr;
}

function solution(my_string, is_suffix) {
    const suffixArr = getSuffixArr(my_string);
    return suffixArr.includes(is_suffix) ? 1 : 0;
}