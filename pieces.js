
class piece {

   
   

    static firstWhiteMove = true;
    static firstBlackMove = true;
    constructor(board, color) {
        this.board = board
        this.color = color;
        this.elem = document.createElement('img');
       
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



class Queen extends piece {


    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.elem.src ="img/wQ.png";
        }
        else
        if(this.color=='black')
        {
            this.elem.src ="img/bQ.png";
        }
      
      console.log(this.elem.src.toString())
      console.log(this.color.toString());
        
}
}



class King extends piece {
    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.elem.src ="img/wK.png";
        }
        else
        if(this.color=='black')
        {
            this.elem.src ="img/bK.png";
        }
      
      console.log(this.elem.src.toString())
      console.log(this.color.toString());
        
        
   
}
   
   
}


class Rook extends piece {
    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.elem.src ="img/wR.png";
        }
        else
        if(this.color==='black')
        {
            this.elem.src ="img/bR.png";
        }
      
      console.log(this.elem.src.toString())
      console.log(this.color.toString());
        
        
   
}
legalMove(initialX, initialY, toX, toY, state) {
    
    //daca se muta in acelasi patrat
    if (initialX == toX && initialY == toY) {
        console.log("Nu se poate muta tura");
        return false;
    }

    //daca unde se va muta piesa exista o alta piesa si daca piesele au aceeasi culoare
    if (state[toX][toY].piece != null && state[toX][toY].piece.color.toLowerCase() == state[initialX][initialY].piece.color.toLowerCase()) {
        console.log("Nu se poate muta tura");
        return false;
    }

    //pana la patratu in care vreau sa ajung sa nu fie nicio alta piesa
    if (initialX == toX && initialY < toY) {
        
        for (let i = initialY + 1; i < toY; i++) {
            if (state[initialX][i].piece != null) {
                console.log("Nu se poate muta tura");
                return false;
            }
        }
    }

    //pana la patratu in care vreau sa ajung sa nu fie nicio alta piesa
    if (initialX == toX && initialY > toY) {
        
        for (let i = toY + 1; i < initialY; i++) {
            if (state[initialX][i].piece != null) {
                console.log("Nu se poate muta tura");
                return false;
            }
        }
    }


    if (initialY == toY && initialX < toX) {
        for (let i = initialX + 1; i < toX; i++) {
            if (state[i][initialY].piece != null) {
                console.log("Nu se poate muta tura");
                return false;
            }
        }
    }
    if (initialY == toY && initialX > toX) {
        for (let i = toX + 1; i < initialX; i++) {
            if (state[i][initialY].piece != null) {
                console.log("Nu se poate muta tura");
                return false;
            }
        }
    }
    
    return true;
}
 
}



class Bishop extends piece {
    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.elem.src ="img/wB.png";
        }
        else
        if(this.color=='black')
        {
            this.elem.src ="img/bB.png";
        }
      
      console.log(this.elem.src.toString())
      console.log(this.color.toString());
        
        
   
}
   
}



class Knight extends piece {
    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.elem.src ="img/wN.png";
        }
        else
        if(this.color=='black')
        {
            this.elem.src ="img/bN.png";
        }
      
      console.log(this.elem.src.toString())
      console.log(this.color.toString());
        
        
   
}
}



class Pawn extends piece {
    
    constructor(board,color) {
        super(board,color);
        if(this.color=='white')
        {
            this.elem.src ="img/wP.png";
        }
        else
        if(this.color=='black')
        {
            this.elem.src ="img/bP.png";
        }
      
      console.log(this.elem.src.toString())
      console.log(this.color.toString());
        
        
   
}
legalMove(initialX, initialY, toX, toY, state) {
    console.log(initialX + ' ' + initialY + ' ' + toX + ' ' + toY);
    if (this.color.toLowerCase() == 'white') {
        if (this.constructor.firstWhiteMove) {
            if (toX - initialX != -1 && toX - initialX != -2) {
                return false;
            }
            if (toY != initialY) {
                return false;
            }
        }
        else { //daca nu e prima mutare
            if (toX - initialX != -1) {
                console.log('entered if1');
                return false;
            }
            if (toY == initialY && state[toX][toY].piece != null) {
                console.log('entered if2');
                return false; //avem piesa in cazul de mers in fata
            }
            if ((toY == initialY + 1 || toY == initialY - 1) && state[toX][toY].piece == null) {
                return false;
            }
            if (toY == initialY - 1 && state[toX][toY].piece.color.toLowerCase() != 'black') {
                console.log('entered if3'); //avem piesa de aceeasi culoare pentru mers pe diag
                return false;
            }
            if (toY == initialY + 1 && state[toX][toY].piece.color.toLowerCase() != 'black') {
                console.log('entered if4'); //avem piesa de aceeasi culoare pentru mers pe diag
                return false;
            }
        }


        this.constructor.firstWhiteMove = false;
        return true;
    }
    else { //black moves
        if (this.constructor.firstBlackMove) {
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
                console.log('entered if2');
                return false; //avem piesa in cazul de mers in fata
            }
            if ((toY == initialY + 1 || toY == initialY - 1) && state[toX][toY].piece == null) {
                return false;
            }
            if (toY == initialY - 1 && state[toX][toY].piece.color.toLowerCase() != 'white') {
                console.log('entered if3'); //avem piesa in cazul de mers
                return false;
            }
            if (toY == initialY + 1 && state[toX][toY].piece.color.toLowerCase() != 'white') {
                console.log('entered if4');
                return false;
            }
        }

        if (toY != initialY - 1 && toY != initialY && toY != initialY + 1) {
            return false;
        }
        this.constructor.firstBlackMove = false;
        return true;
    }
}
    
}




