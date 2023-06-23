/**
QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot
 and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
 */
const { array } = require("./array");

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.time();
console.log(quickSort(array));
console.timeEnd();
