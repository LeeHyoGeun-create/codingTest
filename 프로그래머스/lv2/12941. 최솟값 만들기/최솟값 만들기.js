function solution(A,B){
    // 작은 값을 큰 값에 곱해야 최소값을 얻을 수 있음
    // A를 오름차순으로 정렬하고 B를 내림차순으로 정렬한 후
    // for문을 돌며 같은 인덱스에 있는 값의 곱들을 누적시켜감
    let answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    for(let i = 0 ; i < A.length ; i++){
        answer += A[i] * B[i];
    }
    return answer;
}