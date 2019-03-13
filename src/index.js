module.exports = function solveSudoku(matrix) {

  function getPossibleNum(existingNum) {
    let possibleNum = [];
    for(let k = 1; k <= 9; k++) {
      existingNum.indexOf(k) === -1 ? possibleNum.push(k) : null;
    }
    return possibleNum;  
  };
  
  function searchRow(rowNum) {
    let existingNum = [];
    for(let i = 0; i < rowNum.length; i++) {
      rowNum[i] > 0 ? existingNum.push(rowNum[i]) : null;
      }
    return getPossibleNum(existingNum);
  };

  function searchColumn(columnNum) {
    let existingNum = [];
    matrix.forEach(item => item[columnNum] > 0 ? existingNum.push(item[columnNum]) : null);
    return getPossibleNum(existingNum);
  };

  function searchSquad(rowNum, columnNum) {
    let squad = [];
    if(Math.ceil((columnNum + 1) / 3) === 1) {
      for(let i = (Math.ceil((rowNum + 1) / 3) * 3) - 3; i < Math.ceil((rowNum + 1) / 3) * 3; i++) {
        for(let k = 0; k < 3; k++) {
          squad.push(matrix[i][k]);
        }
      }
    }
    if(Math.ceil((columnNum + 1) / 3) === 2) {
      for(let i = (Math.ceil((rowNum + 1) / 3) * 3) - 3; i < Math.ceil((rowNum + 1) / 3) * 3; i++) {
        for(let k = 3; k < 6; k++) {
          squad.push(matrix[i][k]);
        }
      }
    }
    if(Math.ceil((columnNum + 1) / 3) === 3) {
      for(let i = (Math.ceil((rowNum + 1) / 3) * 3) - 3; i < Math.ceil((rowNum + 1) / 3) * 3; i++) {
        for(let k = 6; k < 9; k++) {
          squad.push(matrix[i][k]);
        }
      }
    }
    return getPossibleNum();
  };

  function getUnique() {
    let unique = [];
    for(let i = 0; i < arguments.length; i++) {
      arguments[i].forEach(item => unique.indexOf(item) === -1 ? unique.push(item) : null);
    }
    return unique;
  }

  for(let vert = 0; vert < matrix.length; vert++) {
    for(let horz = 0; horz < matrix.length; horz++) {
      if(matrix[vert][horz] === 0) {
        let uniqueRow = searchRow(horz);
        let uniqueColumn = searchColumn(vert);
        let uniqueSquad = searchSquad(horz, vert);
        let unique = getUnique(uniqueRow, uniqueColumn, uniqueSquad);
        matrix[vert][horz] = unique[0];
      }
    }
  }
  return matrix;
}
