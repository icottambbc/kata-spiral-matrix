/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 function spiralOrder(matrix) {
    
  const tRight = "TRIGHT";
  const tBottom = "TBOTTOM";
  const tLeft = "TLEFT";
  const tTop = "TTOP";
  
  // this is how we'll keep track of when we need to change direction
  let limits = {
      t: 1,
      r: matrix[0].length -1,
      b: matrix.length -1,
      l: 0
  }
  
  const numberOfCells = (limits.b + 1) * (limits.r + 1);
  
  // this is how we'll keep track of where we are in the matrix
  let currentLocation = {
      x: 0,
      y: 0
  }
  
  // start travelling to the right
  let directionOfTravel = tRight;
  
  // a super sneaky edge case where you can have a 1xn matrix.
  // In this case you have to start travelling downwards as there is no cell to the right. Sneak eh?
  if (limits.r === 0) {
      directionOfTravel = tBottom;
  }

  let output = [matrix[0][0]];

  // do the traversal, lots of fiddly details to get right
  for (let i=0; i<numberOfCells-1; i++) {
      if (directionOfTravel === tRight) {
          if (currentLocation.x + 1 < limits.r) {
              currentLocation.x = currentLocation.x + 1; 
          // when to change direction
          } else if (currentLocation.x + 1 === limits.r) {
              currentLocation.x = currentLocation.x + 1;
              directionOfTravel = tBottom;
              limits.r = limits.r - 1;
          }
      } else if (directionOfTravel === tBottom) {
          if (currentLocation.y + 1 < limits.b) {
              currentLocation.y = currentLocation.y + 1; 
          // when to change direction
          } else if (currentLocation.y + 1 === limits.b) {
              currentLocation.y = currentLocation.y + 1;
              directionOfTravel = tLeft;
              limits.b = limits.b - 1;
          }
      } else if (directionOfTravel === tLeft) {
          if (currentLocation.x - 1 > limits.l) {
              currentLocation.x = currentLocation.x - 1;
          // when to change direction
          } else if (currentLocation.x - 1 === limits.l) {
              currentLocation.x = currentLocation.x - 1;
              directionOfTravel = tTop;
              limits.l = limits.l + 1;
          }
      } else if (directionOfTravel === tTop) {
          if (currentLocation.y - 1 > limits.t) {
              currentLocation.y = currentLocation.y - 1; 
          // when to change direction
          } else if (currentLocation.y - 1 === limits.t) {
              currentLocation.y = currentLocation.y - 1;
              directionOfTravel = tRight;
              limits.t = limits.t + 1;
          }
      }
      
      // print from current Location
      output.push(matrix[currentLocation.y][currentLocation.x]);
      
  }

  return output;
};

module.exports = spiralOrder;