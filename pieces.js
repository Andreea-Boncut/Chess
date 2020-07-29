
class piece {
    constructor(board) {
        this.board = board;

        this.peceI
        this.img = document.createElement('img');
        this.img.src = this.constructor.pieceImage;
    }

    
}



class whiteQueen extends piece {


    static get pieceImage() {
        return 'img/wQ.png';
    }

    constructor() {
        super();
      
    }
}

class blackQueen extends piece {

    static get pieceImage() {
        return 'img/bQ.png';
    }
    constructor() {
        super();
    }   
}

class whiteKing extends piece {

    static get pieceImage() {
        return 'img/wK.png';
    }
    constructor() {
        super();
      
    }
}

class blackKing extends piece {

    static get pieceImage() {
        return 'img/bK.png';
    }
    constructor() {
        super();
    }
}

class whiteRook extends piece {
    static get pieceImage() {
        return 'img/wR.png';
    }
    constructor() {
        super();
       
    }
}

class blackRook extends piece {
    static get pieceImage() {
        return 'img/bR.png';
    }
    constructor() {
        super();
       
    }
}

class whiteBishop extends piece {
    static get pieceImage() {
        return 'img/wB.png';
    }
    constructor() {
        super();
        
    }
}

class blackBishop extends piece {
    static get pieceImage() {
        return 'img/bB.png';
    }
    constructor() {
        super();
        
    }
}

class whiteKnight extends piece {
    static get pieceImage() {
        return 'img/wN.png';
    }
    constructor() {
        super();
       
    }
}

class blackKnight extends piece {
    static get pieceImage() {
        return 'img/bN.png';
    }
    constructor() {
        super();
       
    }
}

class whitePawn extends piece {
    static get pieceImage() {
        return 'img/wP.png';
    }
    constructor() {
        super();
       
    }
}

class blackPawn extends piece {
    static get pieceImage() {
        return 'img/bP.png';
    }
    constructor() {
        super();
        
    }
}


function putPieceInSquare(pieceName,board){
    let piece; 

    switch (pieceName)
    {
    case "wQ":piece=new whiteQueen(board);break;
                
    case "bQ":piece=new blackQueen(board);break;
    
    case "wK": piece=new whiteKing(board);break;

    case "bK": piece=new blackKing(board); break;

    case "wR": piece=new whiteRook(board); break;

    case "bR": piece=new blackRook(board); break;

    case "wN": piece=new whiteKnight(board); break;

    case "bN": piece=new blackKnight(board); break;

    case "wB": piece=new whiteBishop(board); break;

    case "bB": piece=new blackBishop(board); break;

    case "wP": piece=new whitePawn(board); break;

    case "bP": piece=new blackPawn(board); break;
    
    default: break;
    
}
return piece;
}