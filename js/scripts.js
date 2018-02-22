// $(document).ready(function() {
//   $("#agebutton").submit(function(event) {
//   var age = parseInt($("age-first")).val();
//   }
//   $(".result").show();
//
//   if (age > 21) {
//     $('.celebrity').show();
//
//   } else {
//     $('.under-21').show();
//   }
//
// event.preventDefault();
// });


$(document).ready(function(){
  $("#agebutton").submit(function(event){
    event.preventDefault();

    //user input variable
    var age = parseInt($("age-first").val());

    //this shows the second form
    $(".result").show();

    //shows a new section of html based on the user's age inputted
    if (age > 21) {
      $('.celebrity').show();

    } else {
      $('.under-21').show();
    }

  });
});
