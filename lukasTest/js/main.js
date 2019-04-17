var makeItRain = function() {
       //clear out everything
       $('.rain').empty();
      
       var increment = 0;
       var drops = "";
       var backDrops = "";
      
       while (increment < 100) {
         //couple random numbers to use for various randomizations
         //random number between 98 and 1
         var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
         //random number between 5 and 2
         var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
         //increment
         increment += randoFiver;
         //add in a new raindrop with various randomizations to certain CSS properties
         drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
         backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
       }
      
       $('.rain.front-row').append(drops);
       $('.rain.back-row').append(backDrops);
      }
      
      makeItRain();
          
          function barSize() {
      document.getElementById("rain1").style.width = document.getElementById("baggrund").offsetWidth +"px";
      document.getElementById("rain1").style.width = document.getElementById("baggrund").offsetWidth +"px";
              
                      var testDiv = document.getElementById("baggrund");
          document.getElementById("infoKnap").style.left = testDiv.offsetLeft + "px";
      }
      document.onresize = function(){barSize();};
          barSize()
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
      }
      