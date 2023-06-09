function solution(arr, flag) {
    return flag.reduce((list, element, index) => {
        if(element){
            return [...list, ...Array(arr[index] * 2).fill(arr[index])];
        }
        return list.slice(0, list.length - arr[index]);
    }, [])
}