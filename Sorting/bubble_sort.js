//Time Complexity -- O(n^2)
function bubble_sort(arr) {
    let temp = 0;
    for(let i = arr.length; i >= 1; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let unsorted = [3,5,1,2,9,0];
bubble_sort(unsorted);


/*
Time Complexity -- O(n) Linear time for Best case
Pseudocode:

i <- n - 1
while (i > 0) {
    t <- 1
    for j = 1 to i do
        if A[j] > A[j + 1]
            then A[j] <-> A[j + 1]
            t <- j
        end if
    end for
    i <- t - 1
end while
}
*/