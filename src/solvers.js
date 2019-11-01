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



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //FIXED :)
  var board = new Board({n: n});

  var findSolution = function(rowsLeft){
  //conditional statement // its also the points that stops if
  // if rowsleft --

  // CODY
  // from row n-1 to row 0

  // recursing func (r)
  // for (each col)
  // use the toggle ( , )
  // if (! conflict) --->
  // use the recursion
  // untoggling = togle (r , col)

   if(rowsLeft === 0){
     // increment the counter
    solutionCount++;
    //end loop
    return;
   }
  /*
   0,0,0,0,0

  */


  // iteration over the decision tree
  for(var i = 0; i < n ; i++){
    // toggle the row and column index
    board.togglePiece(rowsLeft, i);
    if(!board.hasAnyRooksConflicts()) {
      // recursion again
      findSolution(rowsLeft -1);
    } else {
      board.togglePiece(rowsLeft, i);
    }
  }
}
  findSolution(n-1);

  // HR VIDEO
  // make a new innner func --- findSolution

  // if all rows === 0
  // increment this func; findSolution
  // return; end loop

  // loop over the decision tree
  // ...notes are pretty bad here lol ***
  // reurse it again
  // unplace/ untoggle ***





  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount; // we need to return a Number here
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
