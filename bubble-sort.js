var start = new Date().getTime();

let list = [16,4,42,15,23,8];
let sortedList = [ 4, 8, 15, 16, 23, 42 ];

const bubbleSort = (list) => {
  let notSorted = false;
  const listLength = list.length;
  const defaultNextVal = Number.POSITIVE_INFINITY;

  for (let i = 0; i < listLength; i++) {
    let currentVal = list[i];
    let nextVal = i + 1 < listLength ? list[i + 1] : defaultNextVal;

    console.log(currentVal, nextVal);
    if (currentVal > nextVal) {
      list[i] = nextVal;
      list[i + 1] = currentVal;
      console.log("Current List is", list)
      notSorted = true;
    }
  }

  if (notSorted) {
   bubbleSort(list)
  }
};

bubbleSort(list);
var end = new Date().getTime();
console.log("Call to bubbleSort took " + (start - end) + " milliseconds.")

// checks if each element in two arrays are the same w Array.prototype.every()
console.log(list, 'List Sorted: ' + list.every((v,i)=> v === sortedList[i]) );
