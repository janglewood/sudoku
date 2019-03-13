module.exports = function solveSudoku(matrix) {

  function searchRow(rowNum) {
    let existingNum = [];
    let possibleNum = [];
    for(let i = 0; i < rowNum.length; i++) {
      rowNum[i] > 0 ? existingNum.push(rowNum[i]) : null;
      }
    for(let k = 1; k <= 9; k++) {
      existingNum.indexOf(k) === -1 ? possibleNum.push(k) : null;
    }
    return possibleNum;
  };

  function searchColumn(columnNum) {
    let existingNum = [];
    matrix.forEach(item => item[columnNum] > 0 ? existingNum.push(item[columnNum]) : null);
    return existingNum;
  };

  function searchSquad(rowNum, columnNum) {
    let squad = [];
    if(Math.ceil((columnNum + 1) / 3) <= 1 && Math.ceil((rowNum + 1) / 3) <= 1) {
      for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 3; k++) {
          squad.push(matrix[i][k]);
        }
      }
    }
    if(Math.ceil((columnNum + 1) / 3) <= 2 && Math.ceil((rowNum + 1) / 3) <= 2) {
      for(let i = 3; i < 6; i++) {
        for(let k = 3; k < 6; k++) {
          squad.push(matrix[i][k]);
        }
      }
    }
    if(Math.ceil((columnNum + 1) / 3) === 3 && Math.ceil((rowNum + 1) / 3) === 3) {
      for(let i = 6; i < 9; i++) {
        for(let k = 6; k < 9; k++) {
          squad.push(matrix[i][k]);
        }
      }
    }
    return squad;
  };

  for(let vert = 0; vert < matrix.length; vert++) {
    for(let horz = 0; horz < matrix.length; horz++) {
      if(matrix[vert][horz] === 0) {

      }
    }
  }
}
