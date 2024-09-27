function twoSum(nums, target) {
    if (typeof target !== "number") {
      throw new Error("Target must be a valid number");
    }
    if (!Array.isArray(nums) || nums.length < 2) {
      throw new Error("Input array must contain at least two numbers");
    }
    const numbersMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] === "number") {
        const secondNumber = target - nums[i]; 
  
        if (numbersMap.has(secondNumber)) {
          return [numbersMap.get(secondNumber), i];
        }
        numbersMap.set(nums[i], i);
      } else {
          throw new Error("Array must contain only valid numbers");
      }
    }
    throw new Error("No two numbers add up to the target");
  }
  
  // Examples which I have tested
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  // const nums = [2, 7, 11, 15];
  // const target = "9";
  
  // const nums = [3, 4, 3, 5];
  // const target = 6;
  
  // const nums = [1, 2, 3, 4];
  // const target = 10;
  
  // const nums = [2];
  // const target = 6;
  
  // const nums = [2, null];
  // const target = 6;
  
  console.log(twoSum(nums, target));
  