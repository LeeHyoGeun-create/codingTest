function solution(binomial) {
    const [num1, operator, num2] = binomial.split(' ').filter(Boolean);
    switch(operator){
        case('+'):
            return +num1 + +num2;
        case('-'):
            return +num1 - +num2;
        case('*'):
            return +num1 * +num2;
    }
}