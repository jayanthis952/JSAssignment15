function changeEnough(change, amountDue) {
    const quarters = change[0] * 0.25;
    const dimes = change[1] * 0.1;
    const nickels = change[2] * 0.05;
    const pennies = change[3] * 0.01;
    const total = quarters + dimes + nickels + pennies;
    return total >= amountDue;
  }
  
  console.log(changeEnough([25, 20, 5, 0], 4.25)); 
  console.log(changeEnough([2, 100, 0, 0], 14.11)); 
  console.log(changeEnough([0, 0, 20, 5], 0.75));
  console.log(changeEnough([30, 40, 20, 5], 12.55));
  