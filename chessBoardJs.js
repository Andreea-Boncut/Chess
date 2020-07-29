document.write('<scr'+'ipt type="text/javascript" src="pieces.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="countDown.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="emptyBoard.js" ></scr'+'ipt>');



function initBoardWithPieces()
{
    let board = [ 
        ['wR','wN','wB','wQ','wK','wB','wN','wR'],
        ['wP','wP','wP','wP','wP','wP','wP','wP'],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['bP','bP','bP','bP','bP','bP','bP','bP'],
        ['bR','bN','bB','bQ','bK','bB','bN','bR'] ]
      
      return board;


    
}

function movePiece(board)
{
    // Move King's Pawn forward 2
    board[4][4] = board[6][4];
    board[6][4] = '  ';
    return board;
}


let board=initBoardWithPieces();
console.log(board.join('\n'));
movePiece(board);
console.log(board.join('\n'));

