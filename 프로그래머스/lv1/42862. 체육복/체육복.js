const isOverZero = (value) => {
    return value > 0;
}

function solution(n, lost, reserve) {
    // 여벌체육복을 가져온 사람도 도난당할 수 있다고 함... ㅋㅋㅋㅋㅋ
    // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
    // lost 잃어버린 사람
    // reserve 여벌의 체육복 가져온 사람
    // 체육 수업을 들을 수 있는 학생의 최댓값
    // for문을 돌며 0인 인덱스를 만나면 앞이나 뒤가 2인경우 1을 가져온다.
    // 1로 채워준다 0번째 인덱스는 사람이 없으니깐 0, 
    const arr = new Array(n+1).fill(1)
        .map((value,index)=>{
            if(lost.includes(index) && reserve.includes(index)) return 1;
            if(lost.includes(index)) return 0;
            if(reserve.includes(index)) return 2;
            return value;
        }).slice(1);
    console.log(arr);
    // 0을 만나면 앞과 뒤가 2인 경우를 확인하고 찾으면 1을 가져온다.
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] === 0){
            if(arr[i-1] === 2){
                arr[i-1] = 1;
                arr[i] = 1;
                continue;
            }
            if(arr[i+1] === 2){
                arr[i+1] = 1;
                arr[i] = 1;

            }
        }
    }
    console.log(arr);
    return arr.filter(isOverZero).length;
}



