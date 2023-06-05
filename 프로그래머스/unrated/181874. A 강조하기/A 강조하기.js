function solution(myString) {
    return [...myString].map((value, index) => value === 'a' || value === 'A' ? value.toUpperCase() : value.toLowerCase()).join('');
}