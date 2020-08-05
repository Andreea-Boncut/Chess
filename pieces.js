
class Piece {
   
    static round='white';

    constructor(board, color) {
        this.board = board
        this.color = color;
        this.$elem = $('<img>').attr('id','draggable');
        this.$elem.draggable({
            revert: true,
            revertDuration: 0
        })
        this.firstWhiteMove = true;
        this.firstBlackMove = true;  
    }

    legalMove(initialX, initialY, toX, toY, state) {
        return true;
    }

    static putPieceInSquare(pieceName,board){
        let piece; 
        let whiteColor='white';
        let blackColor='black';
        switch (pieceName)
        {
            case "wQ":piece=new Queen(board,whiteColor);break;
                        
            case "bQ":piece=new Queen(board,blackColor);break;
            
            case "wK": piece=new King(board,whiteColor);break;

            case "bK": piece=new King(board,blackColor); break;

            case "wR": piece=new Rook(board,whiteColor); break;

            case "bR": piece=new Rook(board,blackColor); break;

            case "wN": piece=new Knight(board,whiteColor); break;

            case "bN": piece=new Knight(board,blackColor); break;

            case "wB": piece=new Bishop(board,whiteColor); break;

            case "bB": piece=new Bishop(board,blackColor); break;

            case "wP": piece=new Pawn(board,whiteColor); break;

            case "bP": piece=new Pawn(board,blackColor); break;
            
            default: break; 
        }
        return piece;
    }
}



class Queen extends Piece {

    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.$elem.attr("src","img/wQ.png");
        }
        else
        if(this.color=='black')
        {
            this.$elem.attr("src","img/bQ.png");
        }  
    }

    legalMove(initialX, initialY, toX, toY, state){
        console.log("from: x="+ initialX + ' y=' + initialY + ' to: x=' + toX + ' y=' + toY);
    
        return Bishop.bishopLegalMove(initialX, initialY, toX, toY, state) || Rook.towerLegalMove(initialX, initialY, toX, toY, state);

    }
}

class King extends Piece {

    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.$elem.attr("src","img/wK.png");
        }
        else
        if(this.color=='black')
        {
            this.$elem.attr("src","img/bK.png");
        }  
    }

    legalMove(initialX, initialY, toX, toY, state){

        if((initialX==toX && Math.abs(toY-initialY)==1) || (initialY==toY && Math.abs(toX-initialX)==1)){
            if(state[toX][toY].piece==null){
                return true;
            }
            else{
                return false;
            }
        }
        if(Math.abs(toX-initialX)==1 && Math.abs(toY-initialY)==1){
            if(state[toX][toY].piece!=null){
                if(state[toX][toY].piece.color!=state[initialX][initialY].piece.color){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return true;
            }
        }
    }   
}


class Rook extends Piece {

    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.$elem.attr("src","img/wR.png");
        }
        else
        if(this.color==='black')
        {
            this.$elem.attr("src","img/bR.png");
        } 
    }

    legalMove(initialX, initialY, toX, toY, state) {

        return this.constructor.towerLegalMove(initialX, initialY, toX, toY, state)

    }

    static towerLegalMove(initialX, initialY, toX, toY, state){
        
        if (initialX == toX && initialY == toY) {
            return false;
        }
        if (state[toX][toY].piece != null && state[toX][toY].piece.color == state[initialX][initialY].piece.color) {
            return false;
        }
        if (initialX == toX && initialY < toY) {
            for (let i = parseInt(initialY) + 1; i < toY; i++) {
                if (state[initialX][i].piece != null) {
                    return false;
                }
            }
        }
        if (initialX == toX && initialY > toY) {
            for (let i = parseInt(toY) + 1; i < initialY; i++) {
                if (state[initialX][i].piece != null) {
                    return false;
                }
            }
        }
        if (initialY == toY && initialX < toX) {
            for (let i = parseInt(initialX) + 1; i < toX; i++) {
                if (state[i][initialY].piece != null) {
                    return false;
                }
            }
        }
        if (initialY == toY && initialX > toX) {
            for (let i = parseInt(toX) + 1; i < initialX; i++) {
                if (state[i][initialY].piece != null) {
                    return false;
                }
            }
        }
        return true;
    }
}



class Bishop extends Piece {

    constructor(board,color) {
        super(board,color);
        if(this.color=='white'){
            this.$elem.attr("src","img/wB.png");
        }
        else
        if(this.color=='black'){
            this.$elem.attr("src","img/bB.png");
        }
    }
    legalMove(initialX, initialY, toX, toY, state) {
        return this.constructor.bishopLegalMove(initialX, initialY, toX, toY, state);
    }
    
    static bishopLegalMove(initialX, initialY, toX, toY, state){
       
        if(initialX==toX && initialY==toY){
            return false;
        }

        if (initialX-toX   == toY - initialY) {
            if (initialX > toX) {
                for (let i = parseInt(initialX)-1,  j=parseInt(initialY)+1; i > toX; i--, j++) { //mergem pe diagonala
                    if (state[i][j].piece != null) {
                        return false;
                    }
                }
            }
            else {

                for (let i = parseInt(toX) - 1,  j=parseInt(toY) +1; i > initialX; i--, j++) {
                    if (state[i][j].piece != null) {
                        return false;
                    }
                }
            }
            if(state[toX][toY].piece!=null){
                if(state[initialX][initialY].piece.color==state[toX][toY].piece.color){
                    return false;
                }
            }
            return true;
        }

        if (toX - initialX == toY - initialY) {
            if(initialX>toX){
                for(let i=parseInt(initialX)-1, j=parseInt(initialY)-1;i>toX; i--, j--){
                    if(state[i][j].piece!=null){
                        return false;
                    }
                }
            }
            else{
                for(let i=parseInt(toX)-1, j=parseInt(toY)-1; i>toX; i--, j--){
                    if(state[i][j].piece!=null){
                        return false;
                    }
                }
            }
            if(state[toX][toY].piece!=null){
                if(state[initialX][initialY].piece.color==state[toX][toY].piece.color){
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
}

class Knight extends Piece {
    constructor(board,color) {
        super(board,color);
        if(this.color=='white') {
            this.$elem.attr("src","img/wN.png");
        }
        else
        if(this.color=='black') {
            this.$elem.attr("src","img/bN.png");
        }
    }

    legalMove(initialX, initialY, toX, toY, state) {

        if ((Math.abs(initialY - toY) == 1 && Math.abs(initialX - toX) == 2) || (Math.abs(initialY - toY) == 2 && Math.abs(initialX - toX) == 1)) {
            if (state[toX][toY].piece != null) {
                if (state[toX][toY].piece.color != state[initialX][initialY].piece.color) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
}

class Pawn extends Piece {
    
    constructor(board,color) {
        super(board,color);
        if(this.color=='white'){
            this.$elem.attr("src","img/wP.png");
        }
        else
        if(this.color=='black'){
            this.$elem.attr("src","img/bP.png");
        }
    }

    legalMove(initialX, initialY, toX, toY, state) {
        
        if (this.color == 'white' ) {
            if (this.firstWhiteMove) {
                if (toX - initialX != -1 && toX - initialX != -2) {
                    return false;
                }
                if (toY != initialY) {
                    return false;
                }
            }
            else { 
                if (toX - initialX != -1) {
                    return false;
                }
                if (toY == initialY && state[toX][toY].piece != null) {
                    return false; 
                }
                if ((toY == parseInt(initialY) + 1 || toY == initialY - 1) && state[toX][toY].piece == null) {
                    return false;
                }
                if (toY == initialY - 1 && state[toX][toY].piece.color.toLowerCase() != 'black') {
                    return false;
                }
                if (toY == parseInt(initialY) + 1 && state[toX][toY].piece.color.toLowerCase() != 'black') {
                    return false;
                }
            }
            this.firstWhiteMove = false;
            return true;
        }
        else if(this.color=='black'){ 
            if (this.firstBlackMove) {
                if (toX - initialX != 1 && toX - initialX != 2) {
                    return false;
                }
                if (toY != initialY) {
                    return false;
                }
            }
            else {
                if (toX - initialX != 1) {
                    return false;
                }
                if (toY == initialY && state[toX][toY].piece != null) {
                    return false; //avem piesa in cazul de mers in fata
                }
                if ((toY == parseInt(initialY) + 1 || toY == initialY - 1) && state[toX][toY].piece == null) {
                    return false;
                }
                if (toY == initialY - 1 && state[toX][toY].piece.color!= 'white') {
                    return false;
                }
                if (toY == parseInt(initialY) + 1 && state[toX][toY].piece.color!= 'white') {
                    return false;
                }
            }
            if (toY != initialY - 1 && toY != initialY && toY != parseInt(initialY) + 1) {
                return false;
            }
            this.firstBlackMove = false;
            return true;
        }
    }
}

    





