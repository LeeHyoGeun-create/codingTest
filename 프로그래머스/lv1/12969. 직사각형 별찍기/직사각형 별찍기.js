process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const column = Number(n[0]), row = Number(n[1]);
    let string = "";
    for(let i = 0 ; i < row ; i++ ){
        for(let j = 0 ; j < column; j ++){
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
});