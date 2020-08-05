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
        this.createGame("New Game");
        this.moveFrom=null;
        this.moveTo=null;
        
        $(document).on('dragstart drop', '.square', this.squareListenerFunction.bind(this)); 
        $('#jokeBTN').on('click',this.jokeFunction);

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

                // for(let x = 0; x < 8; x++){
                //     for(let y = 0; y < 8; y++){
                      
                //         if(this.moveFrom.piece.legalMove(this.fromI, this.fromJ,x, y, this.squaresMatrix))
                //         {
                //             this.squaresMatrix[x][y].$elem.addClass("highlightedSquare");

                //         }
                //     }
                // }
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
                        if(Piece.round=="white"){
                            Piece.round="black";
                        }
                        else{
                            Piece.round="white";
                        }
                        this.moveFrom.inner //update la sqMatr
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

    jokeFunction()
    {
        
            $.ajax({
                method: "GET",
                url: "https://sv443.net/jokeapi/v2/joke/Any",
                data: {
                    type: "single"
                }
            }).done(function (data) {
                $("#jokeP").text(data.joke);
            });

        
    }

    createGame(text) {

        let $startDiv=$('<div>');
        this.$container.append($startDiv);
        let $showPiecesBTN=$('<a>');
        $showPiecesBTN.addClass("start");
        $showPiecesBTN.attr('href','#');
        $showPiecesBTN.html(text);
        $showPiecesBTN.on("click", this.postFunction);
        $startDiv.append($showPiecesBTN);
    
      
    }

    postFunction()
    {
        //post moves
        // $.ajax({
        //     method: "POST",
        //     url: "https://chess.thrive-dev.bitstoneint.com/wp-json/chess-api/game/5",
        //     data: {move: {from: {x:1, y:2}, to:{x:1,y:2}}}
        //    }).done(function( msg ) {
        //       alert( "Data Saved: " + msg );
        //    });   
 

        //post new game
        $.ajax({
            method: "POST",
            url: "https://chess.thrive-dev.bitstoneint.com/wp-json/chess-api/game",
            data: {name: "Andreea's game"}
           }).done(function( msg ) {
              console.log(  msg );
           });   
    }
}

function showPieces() {
    $emptyBoard.addPieces();
}



