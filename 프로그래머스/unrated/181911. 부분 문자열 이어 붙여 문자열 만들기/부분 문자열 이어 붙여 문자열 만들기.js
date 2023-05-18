function solution(my_strings, parts) {
    
    return my_strings.reduce((acc, cur, index) => {
        return acc + cur.slice(parts[index][0], parts[index][1] + 1)
    }
    ,[])
}