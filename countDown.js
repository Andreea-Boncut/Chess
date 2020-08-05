

let $countDown = $('<p></p>'); 
$countDown.attr('id','countDown');

let $mainDiv = $('<div>');
$mainDiv.addClass('main-div');

let seconds=2;
$('body').append($mainDiv);
$mainDiv.append($countDown);

let $emptyBoard;

function Decrement(){
    $countDown.text(seconds);
    seconds--;
    if(seconds>=0){
        setTimeout('Decrement()',1000);
    }
    else{
        $emptyBoard=new Board($mainDiv);
       
    }

    
}




