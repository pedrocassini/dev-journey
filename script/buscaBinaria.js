function binarySearch(arr, target){
  let firsIndex = 0;
  let lastIndex = arr.length - 1;
  let midIndex;
  let i=1;

  while(firsIndex <= lastIndex) {
    midIndex = Math.trunc((lastIndex - firsIndex) / 2);

    console.log(`Iteracao ${i}: target=${target} | arr[midIndex]=${arr[midIndex]} | fi=${firsIndex} | li=${lastIndex} | mi=${midIndex}`)

    if(target == arr[midIndex]) {
      return midIndex;
    } else if (target > arr[midIndex]) {
      firsIndex = midIndex + 1;
    } else {
      lastIndex = midIndex - 1;
    }
    
    i++;
  }
}

let nums = [1, 3, 5, 7, 9];

console.log("Passando 1 como target\n");
let index = binarySearch(nums, 1);

console.log(`Index arr[${index}]=${nums[index]}`);
console.log(typeof nums);
