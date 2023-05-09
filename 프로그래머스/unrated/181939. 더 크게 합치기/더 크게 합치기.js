function solution(a, b) {
    const strA = a.toString();
    const strB = b.toString();
    const A = Number(strA + strB);
    const B = Number(strB + strA);
    return A > B ? A : B;
}