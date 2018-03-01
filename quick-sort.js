let start = new Date().getTime();

let list = [24,4,42,15,16,8,-1, 3];
let sortedList = [-1, 3,4,8,15,16,24,42];

const quickSort = (list) => {
  if(list.length < 2) return list;
  // console.log(list);

  let leftList = [];
  let rightList = [];
  const pivot = list.length -1;
  // console.log(pivot);

  const pivotValue = list[pivot];
  // console.log(pivotValue);

  list = list.slice(0, pivot).concat(list.slice(pivot + 1));
  let listLength = list.length;
  // console.log(list);

  for (let i = 0; i < listLength; i++) {
    list[i] < pivotValue ? leftList.push(list[i]) : rightList.push(list[i]);
  }

  console.log(leftList, rightList);

  return quickSort(leftList).concat([pivotValue], quickSort(rightList));
}

const outputList = quickSort(list);

console.log(outputList);
let end = new Date().getTime();
console.log("Call to quickSort took " + (start - end) + " milliseconds.")

// checks if each element in two arrays are the same w Array.prototype.every()
console.log('List Sorted: ' + outputList.every((v,i)=> v === sortedList[i]) );
