const nums = [4, 6, 2, 15, 14, 3, 30];
const target = 17;

function twoSum(nums: Array<number>, target: number) {
  let hash: any = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum: any = nums[i];
    let otherNum: any = target - currentNum;

    console.log(`${i}:Igual 🍫 -> ${otherNum}`);

    // El hasOwnProperty()método devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como propiedad propia (en lugar de heredarla).
    if (hash.hasOwnProperty(otherNum)) {
      return [hash[otherNum], i];
    } else {
      hash[currentNum] = i;
    }
  }
}

// twoSum(nums, target);
console.log(twoSum(nums, target));
