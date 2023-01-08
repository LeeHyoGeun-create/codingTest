function solution(progresses, speeds) {
    // 남은 수 작업양 / 스피드 몇일 걸릴지가 나옴
    // 100퍼 이상을 채워야 하기 때문에 올림을 함
    // 중요도가 높은 것 부터 배포를 해야하기 때문에
    // 맨 앞의 값을 max day라 놓고
    // max day보다 작거나 같은 값이이야 그 안에 완료가 가능하기 때문에 분기를 나눈다.
    // 클 경우 다른 타이밍에 제출을 하는 것이므로 max day를 바꾸고 
    // j를 전진시킨 뒤 1을 넣는다.
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}