function swap(array, idx1, idx2) {
    let tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
    return array;
}

function bubbleSort(array) {
    let cb = (x,y) =>{
        if( x < y){
            return -1;
        }else if(x === y){
            return 0;
        }else{
            return 1;
        }
    }

    let sorted = false;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < array.length - 1; i++){
            let current = array[i];
            let next = array[i + 1];
            if(cb(current, next) === 1){
                array[i + 1] = current;
                array[i] = next;
                sorted = false;
            }
        }
    }
    return array;
}


module.exports = {
    bubbleSort,
    swap
};