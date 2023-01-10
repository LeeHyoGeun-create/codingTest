const isSmallAndSame = (a,b) => {
    return Number(a) <= Number(b);
}

function solution(t, p) {
    // slice(i, i + p.length)를 이용해 부분 문자열을 구한다
    // 작거나 같으면 카운트를 한다.
    let answer = 0;
    const pLength = p.length;
    for(let i = 0; i < t.length - pLength + 1; i++){
        isSmallAndSame(t.slice(i, i + pLength), p) &&  answer++;
    }
    
    return answer;
}