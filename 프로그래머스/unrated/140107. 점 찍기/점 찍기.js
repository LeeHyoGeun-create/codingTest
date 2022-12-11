function solution(k, d) {
    // 거리가 구하는 공식이
    // Math.sqrt(x ** 2 + y ** 2) = s
    // y = Math.sqrt(s ** 2 - x ** 2);
    // x값을 k씩 증가하며 고정시키고
    // y값을 구하고 Math.floor로 최대 좌표를 구함
    // 최대 좌표를 k의 값으로 나눠줌
    // x축 위에 있는 값들은 나오지 않으므로 +1을 해줌
    var answer = 0;
    for(let x = 0; x <= d ; x += k){
        const y = Math.sqrt(d ** 2 - x ** 2);
        const count = Math.floor(y / k);
        answer += count + 1;
    }
    return answer;
}

