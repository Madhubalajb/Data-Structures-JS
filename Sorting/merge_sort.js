function merge(left, right) {
    let c = [];  

    while(left.length && right.length) {
        if(left[0] > right[0]) {
            c.push(right.shift());
        }
        else {
            c.push(left.shift());
        }
    }
    while(left.length) {
        c.push(left.shift());
    }
    while(right.length) {
        c.push(right.shift());
    }
    return c;
}

function merge_sort(array) {
    if(array.length <= 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left_array = array.slice(0, mid);
    const right_array = array.slice(mid, array.length);
    const sorted_left = merge_sort(left_array);
    const sorted_right = merge_sort(right_array);
    return merge(sorted_left, sorted_right);
}

let a = [6,2,3,1,9,10,15,13,12,17];
merge_sort(a);