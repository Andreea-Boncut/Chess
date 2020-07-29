
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
            
    }
    

    initSquareMatrix()
    {
        this.squaresMatrix = [];
        for (let i = 0; i < 8; i++) {
            this.squaresMatrix[i] = [];
            for (let j = 0; j < 8; j++) {
                this.squaresMatrix[i][j] = null;
            }
        }
    }

    createSquares()
    {
        countDown.parentNode.removeChild(countDown);
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                let createdDiv = document.createElement('div');
                this.gridDiv.appendChild(createdDiv);
                if((i+j)%2==0){
                    createdDiv.classList.add('white-div');
                }
                else{
                    createdDiv.classList.add('black-div');
                    
                }
                this.squaresMatrix[i][j] = createdDiv;
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
