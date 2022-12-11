function solution(k, tangerine) {
    // 귤의 크기를 key로 하고 개수를 값으로 하는 객체를 만들고
    // sort를 하기 위해 key 값 쌍들을 배열에 담아준다.
    // 객체를 값의 크기에 따라 sort를 한다.
    // 첫 번째 값부터 k에서 빼주고 k가 0보다 작거나 같아지면 종료
    let answer = 0;
    const obj = {};
    let index = 0;
    for(ele of tangerine){
        obj[ele] = (obj[ele] || 0) + 1;
    }
    const objArr = Object.keys(obj).map((key)=>{
        return [key, obj[key]];
    }).sort(([,a],[,b]) => b -a);
    while(k > 0){
        k = k - objArr[index][1];
        answer++;
        index++;
    }
    
    
    return answer;
}