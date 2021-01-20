

function getrandom(){
    var ramdomno =Math.floor(Math.random() * 0);
alert(ramdomno)
}

function randomcondition(){
    var ramdomno =Math.floor(Math.random() * 0);
   
    var guessinput = document.getElementById("guessno").value;
    var displayGuess = document.getElementById("guessdisplay");
    var DisplayRandom = document.getElementById("showgrandom");
    var message1 = document.getElementById("message");
    var message2 = document.getElementById("message1");
    if(ramdomno == guessinput)
    {
        
        message1.textContent = " You Won !!!!!!"
        message.style.background = "Green";
        message1.style.color= "white";
        message1.style.padding = "5px";


    }
    else{
        
        message2.textContent = " opps you loss !!!"
        message2.style.background = "red";
        message2.style.color= "white";
        message2.style.padding = "5px";
        message2.style.borderRadius = "8px";
    }
    displayGuess.textContent = guessinput;
    DisplayRandom.textContent = ramdomno;
    
    
}