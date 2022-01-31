function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }

  let secondHand = document.getElementById("seconds");
  let minuteHand = document.getElementById("minutes");
  let hourHand = document.getElementById("hour");

      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);

      let secondDegrees = time * 6 - 180;
      let minuteDegrees = Math.floor(time / 60) * 6 - 180;
      let hourDegrees = Math.floor(time / 3600) * 30 - 180;
      
      secondHand.style.transform = "rotate("+secondDegrees+"deg)";
      minuteHand.style.transform = "rotate("+minuteDegrees+"deg)";
      hourHand.style.transform = "rotate("+hourDegrees+"deg)";
  }, 1000);