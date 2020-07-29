
class piece {
    constructor(board) {
        this.board=board;
    }
  }

class whiteQueen extends piece{
    
    constructor()
    {
        super();
        this.img="<img src='img/wQ.png'>";
    }
        
    
    
}

class blackQueen extends piece{

    constructor()
    {
        super();
        this.img="<img src='img/bQ.png'>";
    }
}

class whiteKing extends piece{

    constructor()
    {
        super();
        this.img="<img src='img/wK.png'>";
    }
}

class blackKing extends piece{

    constructor()
    {
        super();
        this.img="<img src='img/bK.png'>";
    }
}

class whiteRook extends piece{
    constructor()
    {
        super();
        this.img="<img src='img/wR.png'>";
    }
}

class blackRook extends piece{

    constructor()
    {
        super();
        this.img="<img src='img/bR.png'>";
    }
}

class whiteBishop extends piece{

    constructor()
    {
        super();
        this.img="<img src='img/wB.png'>";
    }
}

class blackBishop extends piece{

    constructor()
    {
        super();
        this.img="<img src='img/bB.png'>";
    }
}

class whiteKnight extends piece{

    constructor()
    {
        super();
        this.img="<img src='img/wK.png'>";
    }
}

class blackKnight extends piece{
    constructor()
    {
        super();
        this.img="<img src='img/bK.png'>";
    }
}

class whitePawn extends piece{
    constructor()
    {
        super();
        this.img="<img src='img/wP.png'>";
    }
}

class blackPawn extends piece{
    constructor()
    {
        super();
        this.img="<img src='img/bP.png'>";
    }
}
