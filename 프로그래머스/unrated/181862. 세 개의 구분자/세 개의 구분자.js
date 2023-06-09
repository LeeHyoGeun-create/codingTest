function solution(myStr) {
    const regex = /a|b|c/g;
    const newStr = myStr.replaceAll(regex, ' ');
    const valueArr = newStr.split(' ').filter(Boolean);
    if(valueArr.length === 0){
        return ["EMPTY"];
    }
    return valueArr;
}