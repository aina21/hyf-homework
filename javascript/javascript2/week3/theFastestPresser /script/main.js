console.log("file loaded");

/**
 *
 *
 * @returns
 */
function createCounter() {
  let value = 0;
  let locked = false;
  return {
    increase() {
      !locked && value++;
    },
    decrease() {
      !locked && value--;
    },
    lock() {
      locked = true;
    },
    getValue() {
      return value;
    }
  };
}

/**
 *
 *
 * @param {*} playerS
 * @param {*} playerL
 * @returns
 */
function createGame(playerS, playerL) {
  const counterS = createCounter();
  const counterL = createCounter();

  return {
    one: counterS,
    two: counterL,
    markFinish() {
      this.two.lock();
      this.one.lock();
    },
    getWinner() {
      if (this.one.getValue() > this.two.getValue()) {
        return playerS;
      } else if (this.one.getValue() < this.two.getValue()) {
        return playerL;
      } else {
        return "It's a tie";
      }
    }
  };
}

/**
 *
 *
 * @param {string} player
 */
function canvasWinner(player) {
  var confettiSettings = { target: player };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

const startButton = document.querySelector(".controller-start");
const timerSelect = document.querySelector("#controller__setTime");
const playerOneLog = document.querySelector(".playerOne > h4");
const playerTwoLog = document.querySelector(".playerTwo > h4");
const displayMessage = document.querySelector(".display > h3");
const displayTimer = document.querySelector(".display > h5");

let intervalID;

function resetGame() {
  const game = createGame("PlayerOne", "PlayerTwo");
  const canvasElements = document
    .querySelectorAll("canvas")
    .forEach(el => (el.style.display = "none"));

  playerOneLog.innerHTML = 0;
  playerTwoLog.innerHTML = 0;
  displayTimer.innerHTML = "";
  // startButton.removeEventListener("keydown", () => {
  //   event.stopPropagation();
  // });
  return game;
}

startButton.addEventListener("click", () => {
  const newGame = resetGame();
  if (intervalID) {
    clearInterval(intervalID);
  }

  // Time over
  const delayTime = timerSelect.value * 1000;
  setTimeout(() => {
    displayMessage.innerHTML = `Time is over!`;
    startButton.removeEventListener("keydown", counterScore);
  }, delayTime);

  const allowedTime = parseInt(timerSelect.value, 10); // in seconds

  if (isNaN(allowedTime)) {
    return;
  }
  const startTime = new Date();
  const endTime = new Date(startTime).setSeconds(
    startTime.getSeconds() + allowedTime
  );

  intervalID = setInterval(
    () => refreshTimeLeft(endTime, () => clearInterval(intervalID)),
    50
  );

  startButton.addEventListener("keydown", counterScore);

  /**
   * counter score when press 
   *
   * @param {object} event
   */
  function counterScore(event) {
    if (event.which == 83) {
      //press S
      playerOneLog.innerHTML = `${newGame.one.getValue()}`;
      newGame.one.increase();
    } else if (event.which == 76) {
      //press L
      playerTwoLog.innerHTML = `${newGame.two.getValue()}`;
      newGame.two.increase();
    }
  }

  function refreshTimeLeft(endTime, callback) {
    let timeleft = (endTime - new Date()) / 1000;
    if (timeleft < 0) {
      displayMessage.innerHTML = "Finished";

      const winnerId = "canvas" + newGame.getWinner();
      const canvasWinnerTag = document.getElementById(winnerId);
      canvasWinnerTag.style.display = "flex";
      canvasWinner(winnerId);
      callback();
    } else {
      displayMessage.innerHTML = timeleft + " seconds remaining";
    }
  }
});

timerSelect.addEventListener("change", resetGame);
