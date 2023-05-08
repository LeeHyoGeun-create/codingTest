function solution(my_string, overwrite_string, s) {
    // my_str 0 부터 s 까지 자른 문자열 +
    // ober_str +
    // my_str 0 부터 s 까지 자른 길이 +  ober_str 길이 이후 문자열
    let answer = '';
    answer += my_string.slice(0, s);
    answer += overwrite_string;
    answer += my_string.slice(s + overwrite_string.length);
    return answer;
}