function solution(s){
    // 대소문자 구분하지 않음
    // p의 개수 카운트, y의 개수 카운트
    // 개수가 같고 모두 하나도 없으면 true
    // 다르면 false
    /*
    const pORy = {
        p : 0,
        y : 0,
    }
    
    for(value of s.toUpperCase()){
        if(value === 'P') ++pORy.p;
        else if(value === "Y") ++pORy.y;
    }
    
    if(pORy.p === pORy.y){
        return true;
    } 
    return false;
    */
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}