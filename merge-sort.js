var start = new Date().getTime();

let list = [16,4,42,15,23,8];
let sortedList = [ 4, 8, 15, 16, 23, 42 ];

const mergeSort = (list) => {

};

mergeSort(list);
var end = new Date().getTime();
console.log("Call to mergeSort took " + (start - end) + " milliseconds.")

// checks if each element in two arrays are the same w Array.prototype.every()
console.log(list, 'List Sorted: ' + list.every((v,i)=> v === sortedList[i]) );
