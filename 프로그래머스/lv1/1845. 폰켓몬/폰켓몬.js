function solution(nums) {
    // 배열의 length가 nums/2 보다 크다면 nums/2를 리턴
    // 배열의 length가 nums/2 보다 작다면 객체의 length를 리턴
    var answer = 0;
    const hashTable = gatHashTable(nums);
    const hashTableLength = hashTable.filter(notEmpty).length;
    answer = hashTableLength > nums.length / 2 ? nums.length / 2 : hashTableLength;
    return answer;
}

function gatHashTable(nums){
    const hashTable = new Array();
    for(key of nums){
        hashTable[key] = key;
    }
    return hashTable;
}

function notEmpty(value){
    return value !== undefined;
}