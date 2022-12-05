function solution(s) {
    // 문자를 key로하고 개수를 기록하는 obj를 만든다.
    // 문자열을 순회한다.
        // 기준 문자와 다른 문자의 수가 같아지면 count를 올려준다. (나눠주는거라 단순히 count를 올려주면 안된다.)
        // 위의 해결법 ** / ** / ** 
        // index의 -1 부분까지 순회되게 하여 맨 끝에서 count를 올라가는 것을 막고 (덩이가 안 나눠지므로)
        // 앞에서 두번을 나누면 3덩이가 되고 5번을 나누면 6덩이가 되듯 덩이의 수는
        // 앞에서 나눈 횟수 + 1이므로 마지막에 + 1을 해줌;
        // 객체를 초기화 한다.
    // 위의 이유로 count + 1를 리턴
    let count = 0;
    const key = ['',0];
    let others = 0;
    for(let i = 0; i < s.length - 1; i++){
        const char = s[i];
        if(!key[0]) {
            key[0] = char;
        }
        if(key[0] === char){
            key[1]++;
        } else {
            others++;
        }
        if(key[1] === others){
            key[0] = '';
            key[1] = 0;
            others = 0;
            count++;
        }
    }

    return count + 1 ;
}


/* 처음 기준 문자 상관 없이 문자의 개수가 같아지면 나눠지게 했음
function solution(s) {
    // 문자를 key로하고 개수를 기록하는 obj를 만든다.
    // 문자열을 순회한다.
        // 문자 수가 같아지면 count를 올려준다. (나눠주는거라 단순히 count를 올려주면 안된다.)
        // 위의 해결법 ** / ** / ** 
        // index의 -1 부분까지 순회되게 하여 맨 끝에서 count를 올라가는 것을 막고 (덩이가 안 나눠지므로)
        // 앞에서 두번을 나누면 3덩이가 되고 5번을 나누면 6덩이가 되듯 덩이의 수는
        // 앞에서 나눈 횟수 + 1이므로 마지막에 + 1을 해줌;
        // 객체를 초기화 한다.
    // 위의 이유로 count + 1를 리턴
    let count = 0;
    let obj = {};
    for(let i = 0; i < s.length - 1; i++){
        const char = s[i];
        if(Object.values(obj).includes(((obj[char] ?? 0) + 1))){
            count++;
            obj = {};
            continue;
        }
        obj[char] = (obj[char] || 0) + 1;
    }

    return count + 1 ;
}

*/