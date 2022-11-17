function solution(numbers) {
    // set 객체 생성
    // 이중 for문을 돌며 모든 값을 더해봄
    // set 객체를 배열로 바꾸고 정렬
    const set = new Set();
    for(let i = 0 ; i < numbers.length - 1 ; i++){
        for(let j = i + 1 ; j < numbers.length ; j++){
            set.add(numbers[i] + numbers[j]);
        }
    }
    var answer = Array.from(set).sort((a,b)=>a-b);
    return answer;
}