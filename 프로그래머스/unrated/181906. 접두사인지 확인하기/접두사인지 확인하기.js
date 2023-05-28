function solution(my_string, is_prefix) {  
    const prefix = [...my_string].reduce((acc,cur) => {
        const str = (acc[acc.length - 1] || '') + cur;
        acc.push(str);
        return acc;
    },[]);
    return prefix.includes(is_prefix) ? 1 : 0;
}