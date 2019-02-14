document.getElementById("submit").addEventListener("click", function(){
    var inputFields  = document.getElementsByTagName("input");
    
    for(var i = 0; i < inputFields.length; i++){ 
        var theInput = inputFields[i].value;
        console.log(theInput);
        var thePattern = new RegExp(inputFields[i].pattern);
        var theTest = thePattern.test(theInput);
        if (theTest === false){
            console.log(inputFields[i].name + " is not valid");
        }
    }
})
