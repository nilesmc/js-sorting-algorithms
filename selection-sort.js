let start = new Date().getTime();

let list = [24,4,42,15,16,8,-1,3];
let sortedList = [-1,3,4,8,15,16,24,42];

const selectionSort = (list) => {
 // iterate over all items in the list
 const listLength = list.length;
 for(let i = 0; i < listLength; i++){
  // set a variable to store the minimum value, start it on the current val.
  let minIndex = i

  // iterate over all the other items in the array to find the index with the lowest value
  for(let p = minIndex + 1; p < listLength; p++){
    if(list[p] < list[minIndex]){
      // if the minIndex is bigger than the current item set the minIndex to the smaller current value.
      minIndex = p;
    }
  }

  // if the minIndex is different than the index, then swap the two.
  if(minIndex != i){
    console.log('updating order', list);
    const minIndexVal = list[minIndex];
    list[minIndex] = list[i];
    list[i] = minIndexVal;
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
