function partition(array, start, end) {
    let temp = 0;
    let pivot = array[end];
    let pIndex = start;
    
    for(let i = start; i < end; i++) {
        if(array[i] <= pivot) {
            temp = array[i];
            array[i] = array[pIndex];
            array[pIndex] = temp;
            pIndex++;
        }
    }
    
    temp = array[pIndex];
    array[pIndex] = array[end];
    array[end] = temp;
    return pIndex;
}

function quick_sort(array, start, end) {
    if(start >= end) {
        return;
    }
    let pIndex = partition(array, start, end);
    quick_sort(array, start, pIndex - 1);
    quick_sort(array, pIndex + 1, end);
}

let a = [6,2,3,1,9,10,15,13,12,17];
quick_sort(a, 0, a.length - 1);
console.log(a);