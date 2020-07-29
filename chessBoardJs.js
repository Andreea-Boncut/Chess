document.write('<scr'+'ipt type="text/javascript" src="pieces.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="countDown.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="emptyBoard.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="listeners.js" ></scr'+'ipt>');






function movePiece(board)
{
    // Move King's Pawn forward 2
    board[4][4] = board[6][4];
    board[6][4] = '  ';
    return board;
}