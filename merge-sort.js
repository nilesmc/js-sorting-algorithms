var start = new Date().getTime();

let list = [24,4,42,15,16,8,3];
let sortedList = [ 3, 4, 8, 15, 16, 24, 42 ];
var times = 1;

const mergeSort = (list) => {
  console.log("top:", list);
  const listLength = list.length;
  if(listLength <= 1) return list;

  const listMiddle = Math.floor(listLength/2);

  // slice use a floor for non int numbers, so if the list is an odd number it will round down.
  const leftList = list.slice(0, listMiddle);
  const rightList = list.slice(listMiddle, listLength);

  console.log("called:", times);
  times += 1;
  return merge(mergeSort(leftList), mergeSort(rightList));

};

const merge = (leftList, rightList) => {
  let outputList = [];

  console.log("bottom:", leftList, rightList);

  while(leftList.length || rightList.length){

    if(leftList.length && rightList.length){
      if(leftList[0] < rightList[0]){
        outputList.push(leftList.shift());
      }else{
        outputList.push(rightList.shift());
      }
    }else if(leftList.length){
      outputList.push(leftList.shift());
    }else{
      outputList.push(rightList.shift());
    }
  }

  return outputList;
};

const outputList = mergeSort(list);

console.log(outputList);
var end = new Date().getTime();
console.log("Call to mergeSort took " + (start - end) + " milliseconds.")

// checks if each element in two arrays are the same w Array.prototype.every()
console.log('List Sorted: ' + outputList.every((v,i)=> v === sortedList[i]) );
