class Square {
    constructor(xCoord = null, yCoord = null) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.piece = null;
        this.$elem = $('<div>');
        this.setDivColor();
        this.$elem.attr("tabIndex","1");

    }

    setDivColor()
    {
        if ((this.xCoord + this.yCoord) % 2 == 0) {
            this.$elem.addClass('white-div');
        }
        else {
            this.$elem.addClass('black-div');
        }
    }
    setPiece(piece) {
        if (piece != null && piece != undefined) {
            this.piece = piece;
            this.$elem.append(piece.$elem);
           
        }
    }

    removePiece() {
        if (this.$elem.children(":first")) {
            let toRemove = this.$elem.find(':first-child').remove();
            let valToRet = this.piece;
            this.piece = null;
            return valToRet;
        }
        else return null;
    }

}
