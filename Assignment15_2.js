function rightShift(num, shift) {
    if (shift <= 0) {
      return num;
    }
    return rightShift(Math.floor(num / 2), shift - 1);
  }
  const result = rightShift(16, 2); 
  console.log(result);
  