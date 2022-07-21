document.addEventListener("DOMContentLoaded", function () {
   

   //GLOBAL VARIABLES
   var x;
   var buttons = document.getElementsByClassName("answerbtn");
   var butt = document.getElementById ("rating");
   var ratings = document.getElementById("ratings");
   var results = document.getElementById("results"); 
   var submitbtn= document.getElementById ("submitbtn");
   let val;




   // Select the buttons
   function select () {
      for (const answerbtn of buttons ) {    // =>  we are looping over it since JS saves the elements of a class in an array like Object 
         answerbtn.addEventListener ("click", function()  {
      val = answerbtn.value;
      answerbtn.style.backgroundColor="#fb7413";
      answerbtn.style.color = "white";
      showRating(); 

      return unselect();

         });
      }
   }


  function unselect () {
   for (const answerbtn of buttons) {
      answerbtn.addEventListener ("click", function () {
         answerbtn.style.color = "#959eac";
         answerbtn.style.backgroundColor= "#252d37";
         return select();
      })
   }
  }

  select();



   //Submit
   var showRating = function () {
      butt.innerHTML= val;
   }


   function submit () {
  submitbtn.addEventListener("submit", function(event) {
alert ("BIATCH")
  })
   }

submit ();
})
