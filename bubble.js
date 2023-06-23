/**
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
 * This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
 */


const {array} = require('./array')
function bubbleSort(arr)
{
    var i, j, temp;
    var swapped;
    var n = arr.length
    for (i = 0; i < n - 1; i++)
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }

    return arr
}

console.time()
console.log(bubbleSort(array))
console.timeEnd()