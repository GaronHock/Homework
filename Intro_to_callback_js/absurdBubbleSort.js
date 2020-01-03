const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback){
    let sortable = true;
    while (sortable){
        sortable = false;
        for (let i = 0; i < arr.length - 1; i++) {
        const el1 = arr[i];
        const el2 = arr[i + 1];
        askIfGreaterThan(el1,el2, function (bool){
            if (bool) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            sortable = true;
            }
        })
        }
    }
    sortCompletionCallback(arr);
}

    function askIfGreaterThan(el1,el2, callback){
        reader.question(`is ${el1} greater than ${el2} ?`, function(response){
            if (response === "yes"){
                callback(true)
            } else {
              callback(false)
            }
        })
    }

    absurdBubbleSort([1,4,3,5,2,48], function(arr){
        console.log(arr);
        reader.close();
    });