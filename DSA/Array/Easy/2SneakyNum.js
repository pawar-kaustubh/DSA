/* Find the duplicates in an array 
  Method -1 Brute force method
*/

/* function nums(nums) {
  let duplicates = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i]===nums[j]){
                if(!duplicates.includes(nums[i])){
                    duplicates.push(nums[i])
                }
            }
        }
    }
    return duplicates;
}
console.log(nums([1,2,3,3,5]))
*/

// Set mehtod
/* 
function sneakNum(nums) {
  const seen = new Set();
  const duplicate = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      duplicate.add(num);
    } else {
      seen.add(num);
    }
  }
  return [...duplicate];
}
console.log(sneakNum([1, 2, 2, 4, 4, 3, 3, 5]));
 */

// Hash Method

function sneakNum(nums) {
  const res = [];
  const count = new Map();
  for (const x of nums) {
    count.set(x, (count.get(x) || 0) + 1);
    if (count.get(x) === 2) {
      res.push(x);
    }
  }
  return res;
}
console.log(sneakNum([1, 2, 2, 4, 4, 3, 3, 5]));
// function fun(){
// let obj ={

// }

// for(let i =0;i<op.length;i++){
//     if(obj[op[i]]== undefined){
//         obj[op[i]] = 1;
//     }else{
//         obj[op[i]]= obj[op[i]]+1;
//     }
// }
// console.log(Object.values(obj))

// for(let i = 0; i<Object.keys(obj).length; i++){
//    if(obj[Object.keys(obj)[i]] > 1){
//     return Object.keys(obj)[i];
//    }
// }
// }
// console.log(fun())
