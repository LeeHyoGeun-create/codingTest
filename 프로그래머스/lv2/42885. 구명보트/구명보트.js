
function solution(people, limit) {
    // 최대한 빈 곳이 없게 태워야한다.
    // 작은 순서대로 정렬
    // sum 배열을 만들고
    // 큰 쪽에서 태워보고 자리가 남으면 작은쪽 사람을 태움
    // 작은 쪽에선 index를 +1하고 큰 쪽에서는 index -1 한다.
    // limit보다 sum이 커지면 sum을 초기화하고 answer를 +1을 한다.
    const sortedPeople = people.sort((a,b) => a - b);
    let answer = 0;
    let sum = 0;
    let start = 0;
    let end = people.length - 1;
    while(start <= end){
        while(limit >= sum + sortedPeople[end]){
            sum += sortedPeople[end];
            end--; 
        }
        while(limit >= sum + sortedPeople[start]){
            sum += sortedPeople[start];
            start++; 
        }
        sum = 0;
        answer++;
    }
    
    
    return answer;
}