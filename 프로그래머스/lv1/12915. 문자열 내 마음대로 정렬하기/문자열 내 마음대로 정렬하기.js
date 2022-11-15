function solution(a,b){
        a.sort((x, y) => {
            if (x[b] < y[b]) {return -1;}
            else if (x[b] > y[b]) {return 1;}
            else if (x < y) {return -1;}
            else if (x > y) {return 1;}
            return 0
        })
        return a
    }


/*
function solution(strings, n) {
    // 최대한 sort로 해보기
    // 같은 문자가 나왔을 경우 인덱스를 앞에서부터 비교하며
    // 다른 값이 나온 인덱스로 비교
    let answer = [];
   
  
    answer = strings.sort((a,b)=> {
    if (a[n] < b[n]) return -1;
    else if (b[n] < a[n]) return 1;
    else if (b[n] === a[n]){
        let index = 0;
        for(let i = 0 ; i < a.length ; i++){
            if(a[i] !== b[i]){
                index =  i;
            }
        }
        if(a[index] > b[index]) {
            return 1;
        } else if(b[index] > a[index]) {
            return -1;
        } else{
            return 0;
        }
    }  
    else return 0;
});
    
    
    return answer;
}
*/

