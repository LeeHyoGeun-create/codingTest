const circlePlus = (a,b) => {
    return `${a}${b}`
}

function solution(a, b) {
    return Math.max(circlePlus(a,b), 2 * a * b);
}