

let countDown = document.createElement('p'); 
countDown.textContent='new';
countDown.id='countDown';

let mainDiv = document.createElement('div');
mainDiv.classList.add('main-div')

let seconds=5;

let body = document.getElementsByTagName('body')[0].appendChild(mainDiv);
mainDiv.appendChild(countDown);

let emptyBoard;

function Decrement(){
    countDown.textContent=seconds;
    seconds--;
    if(seconds>=0){
        setTimeout('Decrement()',1000);
    }
    else{
        emptyBoard=new gridTable(mainDiv)
       
    }
}

