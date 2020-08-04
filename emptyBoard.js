
class gridTable
{

    static currentState=[ 
       
        ['bR','bN','bB','bQ','bK','bB','bN','bR'], 
        ['bP','bP','bP','bP','bP','bP','bP','bP'],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  ','  '],
        ['wP','wP','wP','wP','wP','wP','wP','wP'], 
        ['wR','wN','wB','wQ','wK','wB','wN','wR']];

    constructor (container){
        
        this.$container=container;
        this.$gridDiv=$('<div></div>');
        this.$gridDiv.attr('id','grid-div');
        this.$gridDiv.addClass('grid-div');
        this.$container.append(this.$gridDiv);
        this.initSquareMatrix();
        this.createSquares();
        this.createBTN();
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
        $countDown.remove();
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                this.createdDiv = new Square(i,j);
                this.$gridDiv.append(this.createdDiv.$elem);
                this.squaresMatrix[i][j]=this.createdDiv;


                this.squaresMatrix[i][j].$elem.on('click',(event) => {     
                        if (this.moveFrom == null) {
                            if (this.squaresMatrix[i][j] != null) {
                                this.moveFrom = this.squaresMatrix[i][j];
                            }
                        }
                        else {
                            this.moveTo = this.squaresMatrix[i][j];
                        console.log("from: "+this.moveFrom+" to: "+this.moveTo);
                        if(this.moveFrom.piece!=null)
                        {
                        if(this.moveFrom.piece.color==piece.round){

                        
                            if (this.moveFrom.piece.legalMove(this.moveFrom.xCoord, this.moveFrom.yCoord,
                                this.moveTo.xCoord, this.moveTo.yCoord, this.squaresMatrix)) {

                                if (this.moveTo.piece != null) {
                                
                                    this.moveTo.removePiece();
                                }

                                this.moveTo.setPiece(this.moveFrom.removePiece());

                            }
                        }
                            
                    }
                            this.moveTo.$elem.blur();
                            this.moveFrom = null;
                            this.moveTo = null;
                            this.deleteShowPiecesBTN();
                        }

                                })
                }
                
                
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
            this.$elem.append(piece.$elem);
           
        }
    }
 
    addPieces()
    {
         
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        
                        let actualPiece = piece.putPieceInSquare(gridTable.currentState[i][j],this.$gridDiv);
                        
                        this.squaresMatrix[i][j].setPiece(actualPiece);
                      
                    }
                }
            
                this.deleteShowPiecesBTN();
            
    }

    createBTN(){
        let $startDiv=$('<div>');
        this.$container.append($startDiv);//container=main div
        let $showPiecesBTN=$('<a>');
        $showPiecesBTN.attr("id","show-Pieces-btn");
        $showPiecesBTN.attr('href','#');
        $showPiecesBTN.html("START");
        $showPiecesBTN.on("click", showPieces);
        $startDiv.append($showPiecesBTN);
    }


    deleteShowPiecesBTN()
    {
        let $btn=$("#show-Pieces-btn");
        $btn.text("ROUND: "+piece.round);
    }
}


