function solution(arr, idx) {
    const findIndex = arr.slice(idx).findIndex((element) => element === 1);
    return findIndex === -1 ? -1 : findIndex + idx;
}