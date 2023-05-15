function solution(code) {
    let ret = '';
    let mode = 0;
    for(let i = 0; i < code.length ; i++){
        if(code[i] === '1'){
            mode = mode === 0 ? 1 : 0;
            continue;
        }
        if(mode === 0 && i % 2 === 0){
            ret += code[i];
        } else if(mode === 1 && i % 2 !== 0){
            ret += code[i];
        }
    }
        
    return ret.length === 0 ? "EMPTY" : ret;
}