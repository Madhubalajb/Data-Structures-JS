function selection_sort(arr) {
    let min = 0;
    let temp = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        //swapping the min element
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
let unsorted = [3,5,1,2,9,0];
selection_sort(unsorted);