function solution(babbling) {
    // 해당 문자열을 할 수 있는 옹알이로 순회하며
    // 해당 옹알이를 만나게 되면 특수한 문자열로 바꿈
    // string은 바꿀 수 없기 때문에 임시 변수를 만들어서 중복적으로 적용되게 함.
    // 특수한 문자열이 연속되게 되면 false
    const baby = ["aya", "ye", "woo", "ma"];
    const newBabbling = [];
    let answer = 0;
    for(word of babbling){
        let temp = word;
        baby.forEach((babb, index)=>{
            if(temp.includes(babb)){
                temp = temp.replaceAll(babb, index);
            }
        })
        if(temp !== word){
                newBabbling.push(temp);
        }
    }   
    console.log(newBabbling);
    
    for(value of newBabbling){
        let isTrue = true;
        if(!isNumeric(value)) isTrue=false;
        if(value.length === 0) continue;
        for(let i = 0; i < value.length - 1 ; i++){
            if(value[i] === value[i+1]){
                isTrue = false;
                break;
            }
        }
        if(isTrue) answer++;
    }
    
    
    return answer;
}

function isNumeric(val) {    
    return /^-?\d+$/.test(val);
}

// !Number.isNaN(+babb)