function solution(n, arr1, arr2) {
    // 정수를 2진수로 바꾸고
    // n의 크기만큼 배열의 넓이를 확보해줘야함
    // 1의 위치를 #으로 변경
    // 두 배열을 합치면 끝
    // .toString(2);
    let answer = [];
    const convertArr1 = decode(arr1, n);
    const convertArr2 = decode(arr2, n);
    answer = findTreasure(convertArr1,convertArr2);
    return answer;
}

function findTreasure(arr1, arr2){
    const newArr = [];
    for(let i = 0; i < arr1.length ; i++){
        let string = '';
        for(let j = 0; j < arr1[i].length ; j++){
            // 둘 중 하나라도 #이 포함이면 # 추가
            string += [...arr1[i]][j] === '#' || [...arr2[i]][j] === '#' ? '#' : ' ';
        }
        newArr.push(string);
    }
    return newArr;
} 

function decode(arr, n) {
    const newArr = [];
    for(value of arr){
        let changeOne = value.toString(2).replace(/1/g, '#');
        let changeZero = changeOne.replace(/0/g, ' ');
        let string = ' '.repeat(n - changeZero.length) + changeZero;
        newArr.push(string);
    }
    return newArr;
}