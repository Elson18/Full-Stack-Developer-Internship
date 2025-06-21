const a=[1,2,3,4,5]
const b=[6,7,8]

let e=a.concat(b)
console.log(e)

let sp=a.splice(1,2)
console.log("Splicied Array: ",sp)
console.log("Unsplicied Array: ",a)

const arr=[8,4,3,2,0]
let d=arr.sort()
console.log("Sorted Array: ",arr)

let s=a.includes(4)
console.log("If an array includes 4:",s)

console.log("The index of 8 is:",b.indexOf(8))
