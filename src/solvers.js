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

  var getRandomInt = function(n){
    return Math.floor(n * Math.random());
  }
  var solution = [];

  var reference = [];
  reference.length = n;
  reference = _.map(reference, function(x){return false;});

  for (var i = 0; i < n; i++) {
    var rand;
    do {
      rand = getRandomInt(n);
    } while (reference[rand]);
    reference[rand] = true;
    solution.push(_.map(reference, function(x, index){
      return (index === rand) ? 1 : 0;
    }));

  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return (function fact (n) {return (n <=0) ? 1 : n * fact(n-1);})(n);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n===0)
    return 1;
  var solutions = [];

  var board = new Board({n:n});
  var recurse = function(numQueensAlreadyPlaced) {

    // base case: 6 queens already placed
    if (numQueensAlreadyPlaced === n){
      if (!board.hasAnyQueensConflicts())
        solutions.push(board._copy());
      return;
    }

    var row = numQueensAlreadyPlaced;

    for (var col = 0; col < n; col++) {
      board.togglePiece(row,col);
      if (!board.hasAnyQueensConflicts())
        recurse(numQueensAlreadyPlaced + 1);
      board.togglePiece(row,col);
    }
  };
  recurse(0);
    // if (numQueens === n && !board.hasAnyQueensConflicts()){
    //    solutions.push(board._copy());
    // }
    // if (numQueens === n){
    //   return;
    // }
  //   var row = numQueens - 1;
  //   for (var col = 0; col < n; col++){
  //     // console.log('numQueens:' +(numQueens-1));
  //     // console.log(board.rows());
  //     // console.log(board.get((numQueens-1)));
  //     board.togglePiece(row, col);
  //     recurse(numQueens + 1);
  //     board.togglePiece(row, col);
  //   }
  // };
  // recurse(0);

  var solutionCount = solutions.length; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
