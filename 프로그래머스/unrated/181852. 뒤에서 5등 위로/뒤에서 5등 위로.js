function solution(num_list) {
    const newList = [...num_list]
    newList.sort((a,b)=>a-b).splice(0,5);
    return newList;
}