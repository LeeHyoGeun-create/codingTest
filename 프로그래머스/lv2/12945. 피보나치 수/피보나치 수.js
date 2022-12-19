// let fibonacci = function (n) {
//       const memo = [0, 1];
//       const aux = (n) => {
//         if (memo[n] !== undefined) return memo[n];
//         memo[n] = (aux(n - 1) + aux(n - 2)) % 1234567 ;
//         return memo[n];
//       };
//       return aux(n);
//     };

function solution(n) {
    const fiboArr = [0,1];
    for(let i = 0 ; i < n - 1; i++){
        fiboArr.push((fiboArr[i] + fiboArr[i+1])  % 1234567 );
    }
    return Number(fiboArr[n]);
}