  //Definer Arrays
    var text = [];
    var numbers = [];
    
    var inputTal = [];
    var verifyError = false;
    //Reset Empty Views
    resetInputFieldsVisually();
    
    
    
    

    
    function input(tallet) {
      inputTal.push(tallet);
      
      resetInputFieldsVisually();
    	inputTal.forEach(updateInput);
    }
    function deleteOneArray() {
      inputTal.pop();
      
      resetInputFieldsVisually();
    	inputTal.forEach(updateInput);
    }
        // updateInput bruges kun til forEach og den har to parametre - value og index - som vi skal bruge fordi vi skal udskifte tallene i inputboksen med det tal som brugeren indtaster og dens placering i arrayet inputTal
    function updateInput(tal, placering) { 
    if(placering == 0) { 
     var inputField = document.getElementById("input1");  
    }else if(placering == 1) { 
     var inputField = document.getElementById("input2");  
    }else if(placering == 2) { 
     var inputField = document.getElementById("input3");  
    }else if(placering == 3) { 
     var inputField = document.getElementById("input4");  
      
    }
      
      inputField.innerHTML = tal;
      inputField.classList.remove("empty");
      
      if(placering == 3) {
       verifyTheCodes(); 
      }
      
    }
    
    function resetInputFieldsVisually(){
      var inputField1 = document.getElementById("input1");
      var inputField2 = document.getElementById("input2");
      var inputField3 = document.getElementById("input3");
      var inputField4 = document.getElementById("input4");
      inputField1.classList.add("empty");
      inputField2.classList.add("empty");
      inputField3.classList.add("empty");
      inputField4.classList.add("empty"); 
    }
    
    function verifyTheCodes() {
     if(inputTal.equals(numbers)){
        document.getElementById("statusFelt").innerHTML = "Korrekt";
		  
       
     }else {
       document.getElementById("statusFelt").innerHTML = "FEJL - IKKE KORREKT";
		 document.getElementById("theInputs").classList.add("ahashakeheartache");
		 setTimeout(function(){
			 document.getElementById("theInputs").classList.remove("ahashakeheartache");
		 },500)
     }
      
       inputTal = [];
		   resetInputFieldsVisually();
    	 inputTal.forEach(updateInput);
     
    }
    
    if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
    


    
    var i = 0;
    //Mens vi ikke har pushet 4 tal, gentag loop
    while(i < 4) {
      var number = getRandomNumber();
      if(!numbers.includes(number)){
      	numbers.push(number);
      i++
     }
    }
    console.log(numbers);
    
    //funktion retunere et tilfældig tal
    function getRandomNumber() {
    
    var min=1; // Minimum værdi til tilfældig tal
    var max=9.99;  // Maksimum værdi til tilfældig tal 
    return Math.floor(Math.random() * (+max - +min) + +min);
      
    }
    function numbersToLetters (tal) {
      switch(tal) {
  case 1:
    return "Et";
    break;
  case 2:
    return "To";
    break;
  case 3:
    return "Tre";
    break;
  case 4:
    return "Fire";
    break;
  case 5:
    return "Fem";
    break;
  case 6:
    return "Seks";
    break;
  case 7:
    return "Syv";
    break;
  case 8:
    return "Otte";
    break;
  case 9:
    return "Ni";
    break; 
  default:
    return "Ikke fundet";
    break;
}
      
    }
    
    function pushLettersTilArray(tal) {
      var tallet = numbersToLetters(tal);
      text.push(tallet);
    }
    
    numbers.forEach(pushLettersTilArray)
    console.log(text);
    document.getElementById("kode").innerHTML = text.join(', ');