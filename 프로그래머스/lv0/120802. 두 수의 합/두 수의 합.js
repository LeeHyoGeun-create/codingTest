function solution(num1, num2) {
    let value = 0;
    for(const argument of Object.values(arguments)){
        value += argument;
    }
    return value;
}