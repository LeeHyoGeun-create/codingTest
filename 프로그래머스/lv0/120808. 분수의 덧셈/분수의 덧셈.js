function gcd(a, b) {
  const remainder = a % b;  
  if (remainder === 0) return b;  
  return gcd(b, remainder);  
}

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    answer[0] = numer1 * denom2 + numer2 * denom1;
    answer[1] = denom1 * denom2;
    const gcdValue = gcd(answer[0], answer[1])
    answer = answer.map(element => element / gcdValue);
    return answer;
}