
let display;

    function updateClock() {
      const date = new Date();
      const time = date.toLocaleTimeString();
      document.getElementById("clock").value = time;

      clock.classList.remove("beat"); 
      void clock.offsetWidth;  
      clock.classList.add("beat"); 
    }

    function start() {
      if (!display) {
        updateClock();
        display = setInterval(updateClock, 1000);
      }
    }

    function stop() {
      clearInterval(display);
      display = null;
    }
    
    start();