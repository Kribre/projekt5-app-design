  //Definer Arrays
  var text = [];
  var numbers = [];

  var inputTal = [];
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
	  let inputField = "";
      if (placering == 0) {
          inputField = document.getElementById("input1");
      } else if (placering == 1) {
          inputField = document.getElementById("input2");
      } else if (placering == 2) {
          inputField = document.getElementById("input3");
      } else if (placering == 3) {
          inputField = document.getElementById("input4");

      }

      inputField.innerHTML = tal;
      inputField.classList.remove("empty");

      if (placering == 3) {
          verifyTheCodes();
      }

  }

  function resetInputFieldsVisually() {
      document.getElementById("input1").classList.add("empty")
      document.getElementById("input2").classList.add("empty")
      document.getElementById("input3").classList.add("empty")
      document.getElementById("input4").classList.add("empty")

  }

  function verifyTheCodes() {
      if (inputTal.equals(numbers)) {
          document.getElementById("input1").classList.add("inputCorrect");
          document.getElementById("input2").classList.add("inputCorrect");
          document.getElementById("input3").classList.add("inputCorrect");
          document.getElementById("input4").classList.add("inputCorrect");

          document.getElementById("statusFelt").innerHTML = "Korrekt";
		  
		  setTimeout(function(){showParentOnlyZone()},600);


      } else {
          document.getElementById("statusFelt").innerHTML = "FEJL - IKKE KORREKT";
          document.getElementById("theInputs").classList.add("ahashakeheartache");
          setTimeout(function() {
              document.getElementById("theInputs").classList.remove("ahashakeheartache");
          }, 500)
      }

      inputTal = [];
      resetInputFieldsVisually();
      inputTal.forEach(updateInput);

  }

  //FUKTION TIL AT KØRE IGENNEM ET ARRAY
  //FUKTION TIL AT KØRE IGENNEM ET ARRAY
  //FUKTION TIL AT KØRE IGENNEM ET ARRAY
  //FUKTION TIL AT KØRE IGENNEM ET ARRAY

  if (Array.prototype.equals)
      console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
  // attach the .equals method to Array's prototype to call it on any array
  Array.prototype.equals = function(array) {
      // if the other array is a falsy value, return
      if (!array)
          return false;

      // compare lengths - can save a lot of time 
      if (this.length != array.length)
          return false;

      for (var i = 0, l = this.length; i < l; i++) {
          // Check if we have nested arrays
          if (this[i] instanceof Array && array[i] instanceof Array) {
              // recurse into the nested arrays
              if (!this[i].equals(array[i]))
                  return false;
          } else if (this[i] != array[i]) {
              // Warning - two different object instances will never be equal: {x:20} != {x:20}
              return false;
          }
      }
      return true;
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "equals", {
      enumerable: false
  });

  //FUKTION TIL AT KØRE IGENNEM ET ARRAY
  //FUKTION TIL AT KØRE IGENNEM ET ARRAY
  //FUKTION TIL AT KØRE IGENNEM ET ARRAY
  //FUKTION TIL AT KØRE IGENNEM ET ARRAY



  var i = 0;
  //Mens vi ikke har pushet 4 tal, gentag loop
  while (i < 4) {
      var number = getRandomNumber();
      if (!numbers.includes(number)) {
          numbers.push(number);
          i++
      }
  }
  console.log(numbers);

  //funktion retunere et tilfældig tal
  function getRandomNumber() {

      var min = 1; // Minimum værdi til tilfældig tal
      var max = 9.99; // Maksimum værdi til tilfældig tal 
      return Math.floor(Math.random() * (+max - +min) + +min);

  }

  function numbersToLetters(tal) {
      switch (tal) {
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
  document.getElementById("kode").innerHTML = text.join(', ');

	  function parrrrrrrentScreen() {
                var testDiv = document.getElementById("baggrund");
                  document.getElementById("infoKnap").style.left = testDiv.offsetLeft - document.getElementById("infoKnap").offsetWidth + "px";
                
                  setTimeout(function(){ document.getElementById("startKnap").style.display = "none"; }, 1500);
                  document.getElementById("startKnap").style.opacity = "0";
                  document.getElementById("parrentScreen").style.removeProperty('display');
                  setTimeout(function(){document.getElementById("parrentScreen").style.opacity = "1";},100);
      }

	  function showParentOnlyZone() {
		  		  document.getElementById("parrentScreen").style.opacity = "0";
                  setTimeout(function(){document.getElementById("parrentScreen").style.display="none";},2000);
		  		  document.getElementById("parrentSectionOnly").style.removeProperty('display');
		  		  setTimeout(function(){document.getElementById("parrentSectionOnly").style.opacity = "1";},100);
		  
		  
      }
		  function exitParrentZone() {
                  document.getElementById("infoKnap").style.left = "0px";
                  setTimeout(function(){ document.getElementById("parrentSectionOnly").style.display = "none"; }, 1500);
                  document.getElementById("parrentSectionOnly").style.opacity = "0";
                  document.getElementById("startKnap").style.removeProperty('display');
                  setTimeout(function(){document.getElementById("startKnap").style.opacity = "1";},100);
			   document.getElementById("parrentScreen").style.opacity = "0";
                  setTimeout(function(){document.getElementById("parrentScreen").style.display="none";},2000);
		  document.getElementById("input1").classList.remove("inputCorrect");
          document.getElementById("input2").classList.remove("inputCorrect");
          document.getElementById("input3").classList.remove("inputCorrect");
          document.getElementById("input4").classList.remove("inputCorrect");

          document.getElementById("statusFelt").innerHTML = "Skriv koden:";
			  
			  
      }
	function navigationParrentZone(x) {
		document.getElementById("parrentTopic1").classList.remove("active");
		document.getElementById("parrentTopic2").classList.remove("active");
		document.getElementById("parrentTopic3").classList.remove("active");
		
		document.getElementById("topicContent1").style.display = "none";
		document.getElementById("topicContent2").style.display = "none";
		
		
			switch (x) {
          case 1:
              document.getElementById("parrentTopic1").classList.add("active");
			  document.getElementById("topicContent1").style.removeProperty('display');
              break;
          case 2:
              document.getElementById("parrentTopic2").classList.add("active");
			  document.getElementById("topicContent2").style.removeProperty('display');
              break;
          case 3:
			  document.getElementById("parrentTopic3").classList.add("active");
			  alert("not made yet");
              break;
		}
	}