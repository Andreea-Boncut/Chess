
class gridTable
{
    constructor (container){
        
        this.container=container;
        this.gridDiv=document.createElement('div');
        this.gridDiv.id="grid-div";
        this.gridDiv.classList.add('grid-div');
        this.container.appendChild(this.gridDiv);
        this.board = [ 
            ['wR','wN','wB','wQ','wK','wB','wN','wR'],
            ['wP','wP','wP','wP','wP','wP','wP','wP'],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['bP','bP','bP','bP','bP','bP','bP','bP'],
            ['bR','bN','bB','bQ','bK','bB','bN','bR'] ]

        this.chessMatrix = [];
        for (let i = 0; i < 8; i++) {
            this.chessMatrix[i] = [];
            for (let j = 0; j < 8; j++) {
                this.chessMatrix[i][j] = null;
            }
        }

        countDown.parentNode.removeChild(countDown);
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                let createdDiv = document.createElement('div');
                this.gridDiv.appendChild(createdDiv);
                if((i+j)%2==0){
                    createdDiv.classList.add('white-div');
                }
                else{
                    createdDiv.classList.add('black-div');
                    
                }
                this.chessMatrix[i][j] = createdDiv;
            }
        }
       
       
    }
    
    

    movePiece(board)
{
    // Move King's Pawn forward 2
    board[4][4] = board[6][4];
    board[6][4] = '  ';
    return board;
}
    addPieces()
    {
        for(let i=0;i<8;i++)
            for(let j=0;j<8;j++)
            {
                
                if(this.board[i][j]=="wQ")
                {
                    let piece=new whiteQueen(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="bQ")
                {
                    let piece=new blackQueen(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="wK")
                {
                    let piece=new whiteKing(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="bK")
                {
                    let piece=new blackKing(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="wR")
                {
                    let piece=new whiteRook(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="bR")
                {
                    let piece=new blackRook(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="wN")
                {
                    let piece=new whiteKnight(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="bN")
                {
                    let piece=new blackKnight(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="wB")
                {
                    let piece=new whiteBishop(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="bB")
                {
                    let piece=new blackBishop(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="wP")
                {
                    let piece=new whitePawn(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }

                if(this.board[i][j]=="bP")
                {
                    let piece=new blackPawn(this);
                    this.chessMatrix[i][j].innerHTML=piece.img;

                }
            }
    }
}
