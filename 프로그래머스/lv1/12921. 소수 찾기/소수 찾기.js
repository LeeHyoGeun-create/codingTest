function solution(n) {
    // 에라노스트의 채
    // 인덱스 번호가 주어진 숫자 n과 대응하도록
    // 빈 배열을 만들고 원소는 true 값으로 채워준다
    // 여기서 true는 소수라는 의미이다.
    const arr = new Array(n+1).fill(true).fill(false,0,2);
    // console.log(arr);
    
    // 주어진 수의 제곱근 까지만 계산해서 불필요한 반복을 최소화한다.
    // arr[i]가 소수일 경우, 반복문을 진행한다.
    // 맨 처음 시작하는 2는 소수이므로,
    // 2를 제외한 2의 제곱부터, 제곱 값만 체크하며 지워나간다.
    // 제곱근까지 반복한다.
    for(let i = 2; i * i <= n; i++){
        // false인 값 판별
        if(arr[i]){
            for(let j = i * i ; j <= n ; j += i){
                arr[j] = false;
                // console.log(i,j,arr[4]);
            }
        }
        
    }
    
    // console.log(arr);
    
    // 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
    
    
    const result = arr.filter((value)=>{
        return value !== false;
    })
    
    return result.length;
}

//시간 초과
// function solution(n) {
//     // 소수를 찾는다
//     // 소수면 배열에 넣는다.
//     // 배열의 길이 반환.
//     const arr = [2]
    
//     // 하나씩 나눠보고 나눠지지 않으면 소수
//     for(let i = 3 ; i <= n ; i = i+2){
//         let count = 0;
//         for(value of arr){
//             if(i % value === 0){
//                 count = count + 1;
//             }
//         }
//         if(count === 0) arr.push(i);
//     }
//     const answer = arr.length;
//     return answer;
// }
