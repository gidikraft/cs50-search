function highestNumPosition(array) {
  // write you code here...
  let highest = Math.min.apply(null, array[0]);
  let result = [0, 0];
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      if(highest < array[i][j]){
        highest = array[i][j];        
        result = [i, j];
      }
    }    
  }  
  return result;   
}


module.exports = highestNumPosition;