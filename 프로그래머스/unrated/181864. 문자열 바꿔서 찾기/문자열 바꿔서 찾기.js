function solution(myString, pat) {
    let temp = '';
    for(let i = 0; i < pat.length ; i++){
        temp += pat[i] === 'A' ? 'B' : 'A';
    }
    return myString.includes(temp) ? 1 : 0;
}