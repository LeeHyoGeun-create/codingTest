// 콘솔 로그를 빼고 성능을 재야합니다.

function solution(new_id) {
    // 해당하는 조건들을 순서대로 적용
    const level1 = new_id.toLowerCase();
    const level2 = setLevel2(level1);
    const level3 = setLevel3(level2);
    const level4 = setLevel4(level3);
    const level5 = setLevel5(level4);
    const level6 = setLevel6(level5);
    const level7 = setLevel7(level6);
    return level7;
}

// 소문자, 숫자, -, _, 마침표 조건으로 걸러준다.
// (code > 47 && code < 58) // numeric(0-9)
// (code > 96 && code < 123) // lower alpha (a-z)
// '-'.charCodeAt === 45
// '_'.charCodeAt === 98
// '.'.charCodeAt === 46
function setLevel2(str){
    let newStr = "";
    for(let i = 0 ; i < str.length ; i++){
        const code = str.charCodeAt(i);
        if((code > 47 && code < 58) ||
          (code > 96 && code < 123) ||
           code === 45 ||
           code === 95 ||
           code === 46           
          ) 
        {
            newStr += str[i];
        }
    }
    return newStr;
}

// for문을 돌며 이전 값이 .인경우 추가하지 않는다.
function setLevel3(str){
    let newStr = '';
    let prev = '';
    for(let i = 0; i < str.length ; i++){
        if(prev === '.' && str[i] === '.'){
            continue;
        }
        newStr += str[i];
        prev = str[i];
    }
    return newStr;
}

// pointer를 앞과 뒤에 2개를 두고
// .이 아닌것을 만날때까지 접근
// 앞과 뒤의 인덱스로 splice를 통해
// 점을 제거
// startsWith('.')
// endsWith('.') 이런 메서드도 있음
function setLevel4(str){
    let start = 0;
    let end = str.length -1;
    while(start <= end){
        if(!(str[start] === '.') && !(str[end] === '.')) break;
        if(str[start] === '.') start++;
        if(str[end] === '.') end--;
    }
    return str.slice(start, end + 1);
}

// length가 0이라면 a를 반환
function setLevel5(str){
    if(!str.length) return 'a';
    return str;
}

// slice로 15개까지 나오게 함. slice도 O(n)이라서 그냥 for문으로 돌렸다.
// 근데 똑같을 듯
// 마지막 인덱스의 값이 .이라면
// 점을 지워주는 lever4를 실행
function setLevel6(str){
    let newStr = "";
    for(let i = 0 ; i < str.length ; i++){
        if(i > 14) break;
        newStr += str[i];
    }
    if(newStr.at(-1) === '.'){
        return setLevel4(newStr);
    }
    return newStr;
}

// 길이가 2 이하라면 3이 될때까지 padEnd를 사용;
function setLevel7(str){
    if(str.length <= 2){
        return str.padEnd(3, str.at(-1));
    }
    return str;
}