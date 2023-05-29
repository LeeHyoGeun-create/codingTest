function solution(str_list) {
    const answer = [];
    const lIndex = str_list.indexOf('l');
    const rIndex = str_list.indexOf('r');
    if(lIndex === -1 && rIndex === -1){
        return [];
    }
    if(lIndex === -1){
        return str_list.slice(rIndex + 1);
    }
    if(rIndex === -1){
       return str_list.slice(0, lIndex);
    }
    return rIndex < lIndex ? str_list.slice(rIndex + 1)  : str_list.slice(0, lIndex);
}