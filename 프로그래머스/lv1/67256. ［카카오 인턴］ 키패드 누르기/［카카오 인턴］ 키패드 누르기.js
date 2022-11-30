function solution(numbers, hand) {
    // 왼손 오른손 구분
    // 왼쪽손의 현재 위치 기억하고
    // 오른손의 현재 위치 기억하고
    // 무엇을 누를지 반환하는 함수 만들고
    // 반환하는 값에 따라 left, right 바꿔주고
    // answer에 무슨 손 썼는지 기록.
    let answer = '';
    let handes = {left:'*',right:'#'}
    for(value of numbers){
        const result = getKeyPad(handes, value, hand);
        console.log(result);
        handes = result.handes;
        answer += result.hand;
    }  
    return answer;
}

// 길이를 비교하고
// 가까운쪽이 누르고
// 같은 경우 왼손잡이 오른손잡이 유무에 따라 함.
// index[1]이 2일 경우에만 둘이 비교
// index[1]이 1일경우 left
// index[1]이 3일 경우 right
function getKeyPad(handes,number,hand){  
    // [1,2,3,4,5,6,7,8,9,'*',0,'#']
    // [[0,1],[0,2],[0,3],[1,1]
    const obj = {
        handes,
        hand : '',
    };                                     
    const leftIndex = getIndex(handes.left);
    const rightIndex = getIndex(handes.right);
    const numberIndex = getIndex(number);
    if(numberIndex[1] === 2){
        const leftToNum = getDistance(leftIndex, numberIndex);
        const rightToNum = getDistance(rightIndex, numberIndex);  
        if(leftToNum === rightToNum){
            if(hand === 'right'){
                obj.hand = "R";
                obj.handes.right = number;
                return obj;
            }
            obj.hand = 'L';
            obj.handes.left = number;
            return obj;
        }
        if(leftToNum < rightToNum){
            obj.hand = 'L';
            obj.handes.left = number;
            return obj;
        }
        obj.hand = 'R';
        obj.handes.right = number;
        return obj; 
    }
    if(numberIndex[1] === 1){
        obj.hand = 'L';
        obj.handes.left = number;
        return obj;
    }
    obj.hand = 'R';
    obj.handes.right = number;
    return obj;                                      
}

function getIndex(key){
    const starter = {'*' : [0,1],
                     '#' : [0,3]}
    const arr = [0,3,3,3,2,2,2,1,1,1]
    // 0은 falsey한 값이니깐 || 으로 3을 넣어줌
    // key가 0이면 falsey니깐 2를 넣어줌
    return starter[key] ?? [arr[key], key ? (key % 3) || 3 : 2];
}
                                       
function getDistance(Index,numberIndex){
    let distance = 0;
    numberIndex.forEach((value,index)=>{
        distance += Math.abs(value - Index[index]);
    })
    return distance;
}

