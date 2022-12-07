function solution(id_list, report, k) {
    // 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
    // k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
    // 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
    // report를 Set 객체로 바꿔 동일한 사람이 동일한 사람을 신고한 경우를 제거한다.
    // 새로운 report 객체를 순회한다.
        // id를 key값으로 하고 신고한 사람들을 대응시킨 객체를 만든다.
        // id를 key값으로 하고 신고당한 숫자를 누적시키는 객체를 만든다.
        // count가 k 이상이면 삭제처리 된다.
    // 삭제처리가 되면 신고한 사람에게 알림을 보내줘야 한다.
    const newReport = Array.from(new Set(report));
    const reportObj = {};
    const countObj = {};
    const deleteUser = [];
    for(const str of newReport){
        const [reporter, reportee] = str.split(' ');
        if(!reportObj[reportee]){
            reportObj[reportee] = [];
        }
        reportObj[reportee].push(reporter);
        countObj[reportee] = (countObj[reportee] || 0) + 1;
    }
    // console.log(reportObj, countObj);
    // k
    for(const key in countObj){
        if(countObj[key] >= k){
            deleteUser.push(key);
        }
    }
    // console.log(deleteUser);
    
    const answer = new Array(id_list.length).fill(0);
    for(const key in reportObj){
        if(deleteUser.includes(key)){
            for(value of reportObj[key]){
                answer[id_list.indexOf(value)] += 1;
            }
        }
    }
    return answer;
}