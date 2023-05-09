function solution(ineq, eq, n, m) {
    const checker = ineq + eq;
    switch(checker){
        case '>=':{
            return +(n >= m);
        }
        case '<=':{
            return +(n <= m);
        }
        case '>!':{
            return +(n > m);
        }
        case '<!':{
            return +(n < m);
        }
    }
}