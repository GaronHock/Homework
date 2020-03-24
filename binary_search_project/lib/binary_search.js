function binarySearch(array, target) {
    if (!array.length) return false;
    let midIndex = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, midIndex);
    let secondHalf = array.slice(midIndex + 1);

    if (target === array[midIndex]) {
      return true; 
    } else if (target < array[midIndex]) {
      return binarySearch(firstHalf, target);
    } else {
      return binarySearch(secondHalf, target);
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;
    let midIndex = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, midIndex);
    let secondHalf = array.slice(midIndex + 1);

    if (binarySearch(array,target)) {
        if (target === array[midIndex]) {
        return midIndex; 
        } else if (target < array[midIndex]) {
        return binarySearchIndex(firstHalf, target);
        } else {
        return binarySearchIndex(secondHalf, target) + midIndex + 1;
        }
    } else {
        return -1
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};