

const addMonth = (term, date) => {
    date = date.split('.').map(Number);
    // 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보
    
    date[1] = date[1] + term;
    
    if(date[1] > 12){
        let year = Math.floor(date[1] / 12);
        let month = date[1] % 12;
        date[0] = month !== 0 ? date[0] + year : date[0] + year - 1;
        date[1] = month !== 0 ? month : 12;
    }
    
    date[2] = date[2] - 1;
    if(date[2] === 0){
        date[1] = date[1] - 1;
        date[2] = 28;
    }
    
    if(date[1] === 0){
        date[1] = 12;
        date[0] = date[0] - 1;
    }
    
    
    
    return date;
}

const isOverToday = (today, computedDate) => {
    const todayDays = today[0] * 12 * 28  + today[1] * 28 + today[2];
    const computedDays = computedDate[0] * 12 * 28  + computedDate[1] * 28 + computedDate[2];
    return todayDays > computedDays;
    
    // if(today[0] > computedDate[0]){
    //     return true;
    // }
    // if(today[1] > computedDate[1]){
    //     return true;
    // }
    // if(today[2]  > computedDate[2]){
    //     return true;
    // }
    // return false;
}

function solution(today, terms, privacies) {
    // 파기해야할 개인 정보를 구한다.
    // 모든 달은 28일까지 있다고 가정
    // 날짜와 유형 분리
    // terms 분리
    // 현재 날짜 계산
    today = today.split('.').map(Number);
    const answer = [];
    const objTerms = {};
    for(const str of terms){
        const [key, value] = str.split(' ');
        objTerms[key] = Number(value);
    }
 
    for(let i = 0; i < privacies.length; i++){
        const [date, type] = privacies[i].split(' ');
        const computedDate = addMonth(objTerms[type], date);
        console.log(today, computedDate)
       if(isOverToday(today, computedDate)){
           answer.push(i + 1);
       };
    }
    
    return answer;
}