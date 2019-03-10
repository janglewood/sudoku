module.exports = function solveSudoku(matrix) {

  function searchRow(rowNum) {
    let emptyCells = [];
    for(let i = 0; i < matrix[rowNum]; i++) {
      matrix[rowNum][i] > 0 ? emptyCells.push(matrix[rowNum][i]) : null;
      }
    }
    return emptyCells;
  };

  function searchColumn(columnNum) {
    let emptyCells = [];
    matrix.forEach(item => item[columnNum] > 0 ? emptyCells.push(item[columnNum]) : null);
    return emptyCells;
  };

  function searchSquad(rowNum, columnNum) {
    let squad = [];
    if(0 <= rowNum <= 2) {
      if(0 <= columnNum <= 2) {
        matrix[rowNum][columnNum] >
      } else if(3 <= columnNum <= 5) {
          squad = 2;
      } else {
          squad = 3;
      }
    } else if(3 <= rowNum <= 5) {
        if(0 <= columnNum <= 2) {
          squad = 4;
        } else if(3 <= columnNum <= 5) {
          squad = 5;
        } else {
          squad = 6;
        }
    } else {
      if(0 <= columnNum <= 2) {
        squad = 7;
      } else if(3 <= columnNum <= 5) {
        squad = 8;
      } else {
        squad = 9;
      }
    } 
  }

  for(let vert = 0; i < matrix.length; vert++) {
    for(let horz = 0; i < matrix.length; horz++)
  }
}
