
class gridTable
{
    static currentState=[ 
        ['wR','wN','wB','wQ','wK','wB','wN','wR'],
        ['wP','wP','wP','wP','wP','wP','wP','wP'],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['bP','bP','bP','bP','bP','bP','bP','bP'],
        ['bR','bN','bB','bQ','bK','bB','bN','bR'] ];
    constructor (container){
        
        this.container=container;
        this.gridDiv=document.createElement('div');
        this.gridDiv.id="grid-div";
        this.gridDiv.classList.add('grid-div');
        this.container.appendChild(this.gridDiv);
        this.initSquareMatrix();
        this.createSquares();
        this.moveFrom=null;
        this.moveTo=null;
    }
    

    initSquareMatrix()
    {
        this.squaresMatrix = [];
        this.piece = []
        for (let i = 0; i < 8; i++) {
            this.squaresMatrix[i] = [];
            this.piece[i] = []
            for (let j = 0; j < 8; j++) {
                this.squaresMatrix[i][j] = null;
                this.piece[i][j] = null;
            }
        }
    }

    createSquares()
    {
        countDown.parentNode.removeChild(countDown);
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                this.createdDiv = new Square(i,j);
                this.gridDiv.appendChild(this.createdDiv.elem);
                this.squaresMatrix[i][j]=this.createdDiv;
               
                this.squaresMatrix[i][j].elem.addEventListener('click', (event)=> {

                    console.log(event.currentTarget)

                    if (this.moveFrom == null) {
                        if (this.squaresMatrix[i][j] != null) {
                            this.moveFrom = this.squaresMatrix[i][j];
                            console.log("From: "+this.moveFrom );
                        }
                    }
                    else {
                        this.moveTo = this.squaresMatrix[i][j];
                        console.log("To: "+this.moveTo);
                        if (this.moveFrom.piece.legalMove(this.moveFrom.xCoord, this.moveFrom.yCoord,
                            this.moveTo.xCoord, this.moveTo.yCoord, this.squaresMatrix)) {

                            if (this.moveTo.piece != null) {
                                console.log('entered to remove piece in battle');
                                console.log(this.moveTo.piece);
                                console.log(this.moveTo.removePiece());
                            }

                            this.moveTo.setPiece(this.moveFrom.removePiece());

                        }
                        this.moveTo.elem.blur();
                        this.moveFrom = null;
                        this.moveTo = null;

                    }

                })
                
            }
        }
        let startDiv=document.createElement('div');
        this.container.appendChild(startDiv);
        let showPiecesBTN=document.createElement('a');
        showPiecesBTN.id="show-Pieces-btn";
        showPiecesBTN.href='#';
        showPiecesBTN.innerHTML="START";
        showPiecesBTN.addEventListener("click", showPieces);;
        startDiv.appendChild(showPiecesBTN);
    }


    movePiece(moveFrom,moveTo)
    {
        console.log("from");
        console.log(moveFrom);

        console.log("to");
        console.log(moveTo);
        if(moveFrom.children.length>0)
        {
            if(moveTo.children.length>0)
        {
            moveTo.removeChild(moveTo.childNodes[0]);
            moveTo.appendChild(moveFrom.childNodes[0]);
        }
        else
        {
            moveTo.appendChild(moveFrom.childNodes[0]);
        }
        this.from_i = moveFrom.getAttribute('data-i')
        this.from_j = moveFrom.getAttribute('data-j')
        this.to_i = moveTo.getAttribute('data-i')
        this.to_j = moveTo.getAttribute('data-j')

       
       
        this.updateCurrentState();
        console.log(gridTable.currentState.join('\n'));
        }
        
        
        
    }
       
    updateCurrentState()
    {
    // Move King's Pawn forward 2
    gridTable.currentState[this.to_i][this.to_j] = gridTable.currentState[this.from_i][this.from_j];
    gridTable.currentState[this.from_i][this.from_j]= '  ';
    
    console.log("move from i="+this.from_i+", j="+this.from_j+"to i="+this.to_i+", j="+this.to_j)
    }

    removePiece(){

        this.createdDiv.removeChild(this.createdDiv.childNodes[0]);

    }

    setPiece(piece) {
        if (piece != null && piece != undefined) {
            this.piece = piece;
            this.elem.appendChild(piece.elem);
            console.log(piece.elem + " " + this.xCoord + " " + this.yCoord);
        }
    }
 
    addPieces()
    {
         
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        let actualPiece = piece.putPieceInSquare(gridTable.currentState[i][j],this.gridDiv);
                        this.squaresMatrix[i][j].setPiece(actualPiece);
                    }
                }
            
            let btn=document.getElementById("show-Pieces-btn");
            btn.parentNode.removeChild(btn);
    }


}
////////////////////////////////

