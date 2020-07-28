class piece {
    constructor() {
     
    }
  }

class whiteQueen{
    img="<img src='wQ.png'>";
}

class blackQueen{

}

class whiteKing{

}

class blackKing{

}

class whiteRook{

}

class blackRook{

}

class whiteBishop{

}

class blackBishop{

}

class whiteKnight{

}

class blackKnight{

}

class whitePawn{

}

class blackPawn{

}


let countDown = document.createElement('p'); 
countDown.textContent='new';
countDown.id='countDown';

let mainDiv = document.createElement('div');
mainDiv.classList.add('main-div')

let seconds=5;

let body = document.getElementsByTagName('body')[0].appendChild(mainDiv);
mainDiv.appendChild(countDown);

function Decrement(){
    countDown.textContent=seconds;
    seconds--;
    if(seconds>=0){
        setTimeout('Decrement()',1000);
    }
    else{
        addChessTableToDiv(mainDiv);
    }
}


function addChessTableToDiv(container){
    
    let gridDiv=document.createElement('div');
    gridDiv.id="grid-div";
    gridDiv.classList.add('grid-div');
    container.appendChild(gridDiv);

    countDown.parentNode.removeChild(countDown);
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            let createdDiv = document.createElement('div');
            gridDiv.appendChild(createdDiv);
            if((i+j)%2==0){
                createdDiv.classList.add('white-div')
            }
            else{
                createdDiv.classList.add('black-div')
                let queen=new whiteQueen();
                createdDiv.innerHTML=queen.img;
            }
        }
    }
}

function addPiece(container,piece){

    
}


