//Counting sort is differnent from the other comparision sorting algorithms (Insertion sort, Selection sort...)
//Time Complexity = O(n + k)

function counting_sort(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    let z = 0;
    let count = [];

    for(let i = min; i <= max;  i++) {
        count[i] = 0;
    }
    
    for(let i = 0; i < array.length; i++) {
        count[array[i]]++;
    }

    for(let i = min; i <= max; i++) {
        while(count[i]-- > 0) {
            array[z++] = i;
        }
    }
}

let arr = [2,5,7,1,0,9];
counting_sort(arr)
console.log(arr);