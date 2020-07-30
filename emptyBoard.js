
class gridTable
{
    
    constructor (container){
        
        this.container=container;
        this.gridDiv=document.createElement('div');
        this.gridDiv.id="grid-div";
        this.gridDiv.classList.add('grid-div');
        this.container.appendChild(this.gridDiv);
        this.initSquareMatrix();
        this.createSquares();
        this.currentState=[ 
            ['wR','wN','wB','wQ','wK','wB','wN','wR'],
            ['wP','wP','wP','wP','wP','wP','wP','wP'],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['  ','  ','  ','  ','  ','  ','  ','  '],
            ['bP','bP','bP','bP','bP','bP','bP','bP'],
            ['bR','bN','bB','bQ','bK','bB','bN','bR'] ];
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
                this.createdDiv = document.createElement('div');
                this.gridDiv.appendChild(this.createdDiv);
                if((i+j)%2==0){
                    this.createdDiv.classList.add('white-div');
                }
                else{
                    this.createdDiv.classList.add('black-div');
                    
                }
                this.createdDiv.setAttribute('data-i', i)

                this.createdDiv.setAttribute('data-j', j)
                this.createdDiv.tabIndex=1;

                this.squaresMatrix[i][j] = this.createdDiv;

                this.createdDiv.addEventListener('click', (event)=> {

                    console.log(event.currentTarget)

                    if(this.moveFrom==null){
                        this.moveFrom=this.squaresMatrix[i][j]
                        this.moveTo=null;
                       
                    }
                    else{
                        this.moveTo=this.squaresMatrix[i][j]
                       
                        this.movePiece(this.moveFrom,this.moveTo);
                       
                       this.moveFrom=null;
                       this.moveTo=null;
                       return;
                        
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
        console.log(this.currentState.join('\n'));
        }
        
        
        
    }
       
    updateCurrentState()
    {
    // Move King's Pawn forward 2
    this.currentState[this.to_i][this.to_j] = this.currentState[this.from_i][this.from_j];
    this.currentState[this.from_i][this.from_j]= '  ';
    
    console.log("move from i="+this.from_i+", j="+this.from_j+"to i="+this.to_i+", j="+this.to_j)
    }

    removePiece(){

        this.createdDiv.removeChild(this.createdDiv.childNodes[0]);

    }

 
    addPieces()
    {
     
        for(let i=0;i<8;i++)
            for(let j=0;j<8;j++)
            {
                if(this.currentState[i][j]!="  ")
                {
                    
                    let newPiece=new piece();
                    newPiece=putPieceInSquare(this.currentState[i][j],this.gridDiv);
                    emptyBoard.squaresMatrix[i][j].appendChild(newPiece.img);
                }
               
            }
            let btn=document.getElementById("show-Pieces-btn");
            btn.parentNode.removeChild(btn);
    }
}
