class Square {
    constructor(xCoord = null, yCoord = null) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.piece = null;
        this.$elem=this.initDiv();
        

    }

    initDiv()
    {
        const $div=$('<div>');
        $div.attr("tabIndex","1");
        $div.addClass('square');
       
        $div.attr("data-i",this.xCoord);
        $div.attr("data-j",this.yCoord);
        if ((this.xCoord + this.yCoord) % 2 == 0) {
            $div.addClass('white-div');
        }
        else {
            $div.addClass('black-div');
        }
        $div.droppable({
            accept: '#draggable'
        });
        return $div;
    }
    setPiece(piece) {
        if (piece != null && piece != undefined) {
            this.piece = piece;
            this.$elem.append(piece.$elem);
           
        }
    }

    setPiece2(piece = null) {
        this.piece = piece;
        if (this.$elem !== null && piece !== null) {
            this.$elem.html(piece.$elem);
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
