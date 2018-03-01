let start = new Date().getTime();

let list = [24,4,42,15,16,8,-1,3];
let sortedList = [-1,3,4,8,15,16,24,42];

const selectionSort = (list) => {
  // iterate over all items in the array.
  for(let i = 0; i < list.length; i++) {
    // set a var for the current index to capture the index with the minimum val later.
    let minIndex = i;

    // check to see if listItem is bigger than other items in the list by iterating over all the other items, if it it set the minIndex
    for(let listItem = minIndex + 1; listItem < list.length; listItem++ ){

      if(list[minIndex] > list[listItem] ) {
        // if it is set, set minIndex to the listItem that is smaller;
        minIndex = listItem;
      }

    }

    // if the listItem is smaller move it to the position of the old minIndex, and swap it with the original min Value.
    if (minIndex != i) {
      let oldMinValue = list[i];
      list[i] = list[minIndex];
      list[minIndex] = oldMinValue;
    }
  }

  return list;
}

const outputList = selectionSort(list);

console.log(outputList);
let end = new Date().getTime();
console.log("Call to selectionSort took " + (start - end) + " milliseconds.")

// checks if each element in two arrays are the same w Array.prototype.every()
console.log('List Sorted: ' + outputList.every((v,i)=> v === sortedList[i]) );
