document.getElementById("submit").addEventListener("click", function(){
    var allInputs  = document.getElementsByTagName("input");
    
    for(var i = 0; i < allInputs.length; i++){ 
        var userInput = allInputs[i].value;
        var myPatterns = new RegExp(allInputs[i].pattern);
        var inputControl = myPatterns.test(userInput);
        if (inputControl === false){
            console.log (allInputs[i].name + " is not valid");
        }
    }
})
