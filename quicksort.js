function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr; 

  // Pick the first value as the pivot
    let pivot = arr[0]; //array index 0 
    let left = []; //creating two new empty arrays to sort into 
    let right = []; 

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
    for (let i = 1; i < arr.length; i++) { //iterate through array with each element
      let num = arr[i];

        if (num >= pivot) { //greater than equal to pivot
          right.push(num); //push to right array
        } else {
          left.push(num); //push to left array
        }
    }
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  let leftSort = quicksort(left); //recursively return the left sorted 
  // Recursively sort the right
  let rightSort = quicksort(right); //recursively return the right sorted
  // Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort]; //return what we're left with

}


module.exports = [quicksort];
