function insertion_sort(arr) {
    let temp = 0;
    let hole = 0;
    for(let i = 1; i < arr.length; i++) {
        temp = arr[i];
        hole = i;
        while(hole > 0 && arr[hole - 1] > temp) {
            arr[hole] = arr[hole - 1];
            hole = hole - 1;
        }
        arr[hole] = temp;
    }
    return arr;
}
let unsorted = [3,5,1,2,9,0];
insertion_sort(unsorted);