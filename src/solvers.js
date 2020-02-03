/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findSolution = function (n, newBoard, checkConflict) {
    //conditional statement // its also the points that stops if
    // if rowsleft --
  var solutionCount = 0;
  var newBoard = newBoard;

  function traverseBoard(rowsLeft, board, conflict) {
  if (rowsLeft === n) {
    // increment the counter
    solutionCount++;
    //end loop
    console.log(solutionCount);
    return;
  }

  //iteration over the decision tree
  for(var i = 0; i < n ; i++) {
    // toggle the row and column index
    board.togglePiece(rowsLeft, i);
    if(!conflict) {
      // recursion again
      findSolution(rowsLeft + 1);
    }
      board.togglePiece(rowsLeft, i);
    }
  }

  traverseBoard(n-1, newBoard, checkConflict);

  return solutionCount;
};

window.findNRooksSolution = function (n) {
  var solution = undefined; //fixme

  var newBoard = new Board({
    n: n
  });

  findSolution(n, newBoard, newBoard.hasAnyRooksConflicts());

  return board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  
  var newBoard = new Board({
    n: n
  });

  console.log(findSolution(n, newBoard, newBoard.hasAnyRooksConflicts(), 0));
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount; // we need to return a Number here
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = 0; //FIXED :)
  var board = new Board({
    n: n
  });

  var findSolution = function (rowsLeft) {
    //conditional statement // its also the points that stops if
    // if rowsleft --

    if (rowsLeft === n) {
      // increment the counter
      solutionCount++;
      //end loop
      return;
    }

  //iteration over the decision tree
    for(var i = 0; i < n ; i++){
      // toggle the row and column index
      board.togglePiece(rowsLeft, i);
      if(!board.hasAnyQueensConflicts()) {
        // recursion again
        findSolution(rowsLeft + 1);
      }
        board.togglePiece(rowsLeft, i);
    }
  }
  
  findSolution(0);
  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};