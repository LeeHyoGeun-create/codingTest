function solution(citations) {
    // n편중 h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용 되었다면 h의 최대값
    // n >= h
    // citations.filter(element => element >= h) > h && 나머지 <= h
    const n = citations.length;
    let h = n;
    while(h !== 0){
        const cited = citations.filter(element => element >= h).length
        if(cited >= h && n - cited <= h){
            return h;
        }
        h--;
    }
    return 0;
}