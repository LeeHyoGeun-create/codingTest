function solution(n) {
    // 1의 개수를 저장해두고
    // 1씩 늘려가며 숫자가 같아지는 순간에 return;
    const binary = n.toString(2);
    const oneNum = binary.match(/1/g).length;
    while(true){
        ++n;
        if(oneNum === n.toString(2).match(/1/g).length) return n;
    }
}