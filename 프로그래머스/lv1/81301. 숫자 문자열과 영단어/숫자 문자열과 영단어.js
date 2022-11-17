function solution(s) {
    // 문장에서 영어로 변한 숫자를 찾아서
    // 다시 숫자로 바꿔줘야 함
    let answer = s;
    const arr = ['zero','one','two','three','four','five','six','seven',
                'eight','nine'];
    for(let i = 0 ; i < arr.length ; i++){
        if(answer.includes(arr[i])){
            // regex에 ''이 들어가면 안됨.
            // const regex = `/${arr[i]}/g`;
            const regex = new RegExp(`${arr[i]}`, 'g')
            answer = answer.replace(regex,String(i));
        }
        
    }
    
    return +answer;
}