export const twoSum = (nums: Array<number>, target: number) => {
  let hash: any = {};
  let returnVal: Array<number> | undefined;

  for (let i = 0; i < nums.length; i++) {
    let currentNum: any = nums[i];
    let otherNum: any = target - currentNum;

    console.log(`${i}:Igual 🍫 -> ${otherNum}`);

    // El hasOwnProperty()método devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como propiedad propia (en lugar de heredarla).
    if (hash.hasOwnProperty(otherNum)) {
      returnVal = [hash[otherNum], i];
      //   return returnVal;
    } else {
      hash[currentNum] = i;
    }
  }

  console.log(returnVal);
};
