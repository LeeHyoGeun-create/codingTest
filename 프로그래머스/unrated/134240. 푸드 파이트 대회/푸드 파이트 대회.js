function solution(food) {
    // food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
    // food[i]는 i번 음식의 수입니다.
    // 대회를 위한 음식의 배치를 나타내는 문자열을 return
    // 반으로 쪼개서 0을 붙이고 reverse해서 붙임
    var answer = '';
    const newArr = food.map((value)=>{
        return parseInt(value/2,10);
    })
    let temp = '';
    // console.log(newArr);
    for(let i = 1; i < newArr.length ; i++){
        for(let j = 0 ; j < newArr[i] ; j++){
            temp += String(i);
        }
    }
    console.log(temp);
    answer = temp + '0' + [...temp].reverse().join('');
    return answer;
}