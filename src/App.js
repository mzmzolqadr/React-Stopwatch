import "./App.css";

function App() {
  window.onload = function () {
    var seconds = 0;
    var tens = 0;
    var lapNumber = 0;
    var appendTens = document.getElementById("tens");
    var lapSeconds = document.getElementById("lapSeconds");
    var lapTens = document.getElementById("lapTens");
    var lapCounter = document.getElementById("laps");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonLap = document.getElementById("button-lap");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    buttonStart.onclick = function () {
      clearInterval(interval);
      interval = setInterval(startTimer, 10);
    };

    buttonLap.onclick = function () {
      document.getElementById("lapTens").innerText =
        document.getElementById("tens").innerText;
      document.getElementById("lapSeconds").textContent =
        document.getElementById("seconds").textContent;

      lapNumber = lapNumber + 1;
      lapCounter.innerText = lapNumber;
    };

    buttonStop.onclick = function () {
      clearInterval(interval);
    };

    buttonReset.onclick = function () {
      clearInterval(interval);
      tens = "00";
      seconds = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      lapSeconds.innerHTML = tens;
      lapTens.innerHTML = tens;
      lapCounter.innerHTML = 0;
    };

    function startTimer() {
      tens++;

      if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
      }

      if (tens > 9) {
        appendTens.innerHTML = tens;
      }

      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }

      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }

      // if (seconds > 60)
    }
  };

  return (
    <div className="App">
      <div class="wrapper">
        <h2>Virtual Stopwatch JS Clock</h2>
        <p id="originalTime">
          Totall Time: <span id="seconds">00</span>:<span id="tens">00</span>
        </p>
        <p>
          Laps: <span id="laps"></span> <span id="lapSeconds">00</span>:
          <span id="lapTens">00</span>
        </p>
        <button id="button-start">Start</button>
        <button id="button-lap">Lap</button>
        <button id="button-stop">Stop</button>
        <button id="button-reset">Reset</button>
      </div>
      <script src="./app.js"></script>
    </div>
  );
}

export default App;
