document.write('<scr'+'ipt type="text/javascript" src="pieces.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="countDown.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="square.js" ></scr'+'ipt>');

class Board
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

    constructor(container){
        
        this.$container=container;
        this.$gridDiv=$('<div></div>');
        this.$gridDiv.attr('id','grid-div');
        this.$gridDiv.addClass('grid-div');
        this.$container.append(this.$gridDiv);
        this.initSquareMatrix();
        this.createSquares();
        this.createBTN("START");
        this.moveFrom=null;
        this.moveTo=null;
        $(document).on('dragstart drop', '.square', this.squareListenerFunction.bind(this)); 
        
        
    }
    
    initSquareMatrix(){

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

    createSquares(){

        $countDown.remove();
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                this.createdDiv = new Square(i,j);
                this.$gridDiv.append(this.createdDiv.$elem);
                this.squaresMatrix[i][j]=this.createdDiv;
            }
        }   
    } 
       
    squareListenerFunction(event)
    {   
       
        const i = event.currentTarget.getAttribute('data-i');
        const j = event.currentTarget.getAttribute('data-j');

        if (this.moveFrom == null) {
            if (this.squaresMatrix[i][j] != null) {
                this.moveFrom = this.squaresMatrix[i][j];
                this.fromI=i;
                this.fromJ=j;
            }
        }
        else {

           

            this.moveTo = this.squaresMatrix[i][j];
            this.toI=i;
            this.toJ=j;
            console.log("from: "+this.moveFrom+" to: "+this.moveTo);
            if(this.moveFrom.piece!=null){
                if(this.moveFrom.piece.color==Piece.round){
                    if (this.moveFrom.piece.legalMove(this.fromI, this.fromJ,this.toI,  this.toJ, this.squaresMatrix)){   
                        this.postMove(this.fromI,this.fromJ,this.toI,this.toJ);
                        if(Piece.round=="white")
                        {
                            Piece.round="black";
                        }
                        else
                        {
                            Piece.round="white";
                        }
                        this.moveTo.setPiece2(this.moveFrom.piece);
                        this.moveFrom.piece = null;
                        this.updateCurrentState();
                       
                    }
                }
            }
            this.moveTo.$elem.blur();
            this.moveFrom = null;
            this.moveTo = null;
            this.changeShowPiecesBTN("ROUND: "+Piece.round);
        }
      
    }

    updateCurrentState() {

        Board.currentState[this.moveTo.xCoord][this.moveTo.yCoord] = Board.currentState[this.moveFrom.xCoord][this.moveFrom.yCoord];
        Board.currentState[this.moveFrom.xCoord][this.moveFrom.yCoord]= '  ';
        console.log(Board.currentState.join("\n"));
    }

 
 
    addPieces() {
         
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let actualPiece = Piece.putPieceInSquare(Board.currentState[i][j],this.$gridDiv);
                this.squaresMatrix[i][j].setPiece(actualPiece);
            }
        }
        this.changeShowPiecesBTN("ROUND: "+Piece.round); 
        setInterval(this.getMoves(this.squaresMatrix),1000)
    }

    createBTN(text) {

        let $startDiv=$('<div>');
        this.$container.append($startDiv);//container=main div
        let $showPiecesBTN=$('<a>');
        $showPiecesBTN.attr("id","show-Pieces-btn");
        $showPiecesBTN.attr('href','#');
        $showPiecesBTN.html(text);
        $showPiecesBTN.on("click", showPieces);
        $startDiv.append($showPiecesBTN);
      
    }

    changeShowPiecesBTN(text){

        let $btn=$("#show-Pieces-btn");
        $btn.off("click", showPieces);
        $btn.text(text);
    }


    createGame(text) {

        let $startDiv=$('<div>');
        this.$container.append($startDiv);
        let $showPiecesBTN=$('<a>');
        $showPiecesBTN.addClass("start");
        $showPiecesBTN.attr('href','#');
        $showPiecesBTN.html(text);
        $startDiv.append($showPiecesBTN);
    
      
    }

   
    postNewGame()
    {
        $.ajax({
            method: "POST",
            url: "https://chess.thrive-dev.bitstoneint.com/wp-json/chess-api/game",
            data: {name: "Andreea's game"}
        }).done(function( msg ) {
              console.log(  msg );
            });   
    }

    postMove(fromI, fromJ, toI, toJ)
    {
        
        $.ajax({
            method: "POST",
            url: "https://chess.thrive-dev.bitstoneint.com/wp-json/chess-api/game/127",
            data: {move: {from: {x: fromI, y:fromJ}, to:{x:toI,y:toJ}}}
           }).done(function( msg ) {
              alert( msg );
        });   
 
    }

    getMoves(squaresMatrix){
        
        $.ajax({
            method: "GET",
            url: "https://chess.thrive-dev.bitstoneint.com/wp-json/chess-api/game/127",
            
        }).done((data)=> {
            console.log(data.moves.length);
            let fromI=data.moves[data.moves.length-1].from.x;
            let fromJ=data.moves[data.moves.length-1].from.y;
            let toI=data.moves[data.moves.length-1].to.x;
            let toJ=data.moves[data.moves.length-1].to.y;

            if(data.moves.length%2!=0)
            {
                let toSquare=squaresMatrix[toI][toJ];
                let fromSquare=squaresMatrix[fromI][fromJ].piece;
                toSquare.setPiece(fromSquare);
                console.log("moved from "+fromI+" "+fromJ+" to " + toI+" "+ toJ);
            }
    
    });
    
    }
   
}

function showPieces() {
    $emptyBoard.addPieces();
}





