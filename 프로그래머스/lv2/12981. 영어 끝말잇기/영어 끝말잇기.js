function solution(n, words) {
    // 중복인지는 object를 쓰면 더 빠를 것 같다.
    // 사람 순서를 새는 배열, 단어를 새는 객체
    // 단어의 끝을 기억하는 변수
    // 탈락조건
        // 끝 알파벳이 아닌 다른 알파벳으로 대답을 했을경우
        // 이미 나온적이 있는 단어를 말했을 경우
    // 주어진 단어로 탈락하지 않으면 [0,0]
    // 리턴 값 : [가장 먼저 탈락하는 사람의 번호, 자신의 몇번의 순서에서 탈락했는가]
    const wordsObj = {};
    const countPerson = new Array(n).fill(0);
    let index = 0;
    let lastChar = words[0][0];
    for(const word of words){
        if((lastChar !== word.slice(0,1)) || word in wordsObj){
            return [index % n + 1, countPerson[index % n] + 1];
        }
        wordsObj[word] = (wordsObj[word] ?? 0) + 1;
        countPerson[index % n] += 1;
        lastChar = word.at(-1);
        index++;
    }

    return [0,0];
}