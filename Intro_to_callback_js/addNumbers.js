const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallBack){

    if (numsLeft === 0){
        completionCallBack(sum)
    } else if (sum === 0){
        reader.question("Give me a number", function(numString1){
        const num = parseInt(numString1);
            sum += num
            addNumbers(sum, numsLeft - 1, completionCallBack);
        })
    }else{
        reader.question(`Sum: ${sum}.....Give me another number`, function (numString1) {
            const num = parseInt(numString1);
            sum += num
            addNumbers(sum, numsLeft - 1, completionCallBack);
        })
    }
}
addNumbers(0, 3, sum => {
    console.log(`Total Sum: ${sum}`)
    reader.close();
});

