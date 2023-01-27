const isLowerCase = (char) =>{
    return (97 <= char.charCodeAt()) && (122 >= char.charCodeAt()) 
}

const getPairArr = (str) => {
    const pairArr = [];
    for(let i = 0; i < str.length -1; i++){
        if(!isLowerCase(str[i]) || !isLowerCase(str[i+1])){
            continue;
        }
        pairArr.push(str[i] + str[i+1])
    }
    return pairArr;
}

function solution(str1, str2) {
    // 자카드 유사도, 두 집합의 교집합 크기  두 집합의 합집합 크기로 나눈 값
    // 두 집합 모두가 공집합일 경우에는 1
    // 대문자 소문자는 무시한다
    // 공백이나 특수문자가 있는 경우에는 버린다
    // 유사도 값은 0에서 1 사이의 실수이므로, 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력
    // 합집합 === str1.length + str2.length2 - 교집합.length
    // 교집합 두 배열을 sort하고 findIndex로 찾았던 배열을 제외하고 찾음
    // 0 1 1 3 3 3
    // 0 1 2 3
    
    // 1 3 1 0 3 3
    // 3 0 1 2
    
    // indexOf를 이용하며 중복 없이 순서대로 탐색하기 위해
    [str1, str2] = [...arguments].map((str) => getPairArr(str.toLowerCase()).sort() );
    // console.log(str1,str2);
    // 한쪽이 공집합인 경우
    if( (str1.length === 0 && str2.length !== 0) || (str1.length !== 0 && str2.length === 0)){
        return 0;
    }  
    let lastIndex = 0;
    let intersectionNum = 0;
    for(const value of str1){
        let temp = str2.indexOf(value,lastIndex);
        if(temp !== -1){
            lastIndex = temp + 1;
            intersectionNum++;
        }
    }
    const unionNum =  str1.length + str2.length - intersectionNum;
    if(unionNum === 0 ) return 65536;
    const J =  intersectionNum / unionNum;
    // console.log(intersectionNum);
    return parseInt((J * 65536),10)  ;
}