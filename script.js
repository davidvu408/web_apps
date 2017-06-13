$(document).ready(function() {
  $("#start_timer").click(function(){
    var dateInitial = new Date();
    var x = setInterval(function(){
      var dateFinish = new Date();
    //  dateFinish.setMinutes( dateInitial.getMinutes() + 30 );
      var difference = dateFinish - dateInitial;
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

      $("#time_display").text(minutes + ":" + seconds);

      if(difference < 0){
        clearInterval(x);
        $("#time_display").text("00:00");
      }
    }, 1000);
  });
});
