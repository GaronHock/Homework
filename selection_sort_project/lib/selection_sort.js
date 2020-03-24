function swap(arr, index1, index2) {
    let tmp = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = tmp; 
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length -1; i++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[smallest] > arr[j]){
               smallest = j
            }
        }
        swap(arr, i, smallest);
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};