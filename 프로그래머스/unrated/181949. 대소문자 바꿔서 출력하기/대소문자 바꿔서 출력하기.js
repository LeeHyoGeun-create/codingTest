function isUpper(strValue) {
  let firstStrValue = strValue.charCodeAt(0);
  return firstStrValue >= 65 && firstStrValue <= 90;    
}

// 아스키 코드로 확인한다
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let returnValue = ''
    str = input[0];
    for(const char of str){
        if(isUpper(char)){
            returnValue += char.toLowerCase();
            continue;
        }
        returnValue += char.toUpperCase();
    }
    console.log(returnValue);
});