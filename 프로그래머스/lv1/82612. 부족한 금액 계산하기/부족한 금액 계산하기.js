function solution(price, money, count) {
    // money - price * count를 하는데
    // 변화하는 놀이기구 가격을 반영해야한다.
    // money가 0보다 작으면 절대값을 취해서 리턴
    // 0이상이면 0 리턴
    for(let i = 1 ; i <= count ; i++){
        money -= price * i;
    }
    if(money < 0){
        return Math.abs(money);
    }
    return 0;
}