window.onload = function() {
    $("#start").on("click", start);
  };
  
  var intervalId;
  

  function start() {
  
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
  function stop() {
  
    clearInterval(intervalId);
    clockRunning = false;
  }

  function count() {
  
  
  function timeConverter(t) {
  
  
    var minutes = Math.floor(t / 45);
    var seconds = t - (minutes * 45);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }