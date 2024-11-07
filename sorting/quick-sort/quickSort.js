// Quick Sort
function quickSort(arr) {

    // base case
    if (arr.length <= 1) return arr;

    // select pivot
    let pivot = arr.pop();

    // divide and conquer
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // recursively call quickSort until base case is reached
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// test
console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));