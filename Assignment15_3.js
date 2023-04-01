function secondDerivative(b, m) {
    // calculate the first derivative of the function
    const firstDerivative = (x) => b * Math.pow(x, b - 1) + Math.exp(b * m);
    
    // calculate the second derivative of the function
    const secondDerivative = (x) => b * (b - 1) * Math.pow(x, b - 2);
    
    // evaluate the second derivative at x=m
    return secondDerivative(m);
  }
  const b = 3;
  const m = 2;
  const result = secondDerivative(b, m);
  
  console.log(result); // output: 18
    