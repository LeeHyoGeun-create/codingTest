const isOdd = (number) => {
    return number % 2 === 1;
}

function solution(n)
{
    var ans = 0;
    while(n !== 0){
        if(isOdd(n)){
            ans++;
            n = n-1;
        }
        n = n / 2;
    }
    return ans;
}