let scoreComputer = 0;
let scorePlayer = 0;
let result = document.querySelector("#result");
let result2 = document.querySelector("#result2");
const playerScore = document.querySelector("#playerScore");
const computerScore= document.querySelector("#computerScore");
const rock = document.querySelector("#rock");
const papper = document.querySelector("#papper");
const scissors = document.querySelector("#scissors");
const playerShow = document.querySelector("#playerShow");
const computerShow = document.querySelector("#computerShow");
let computerPicks = ["rock.svg", "papper.svg", "scissors.svg"];

rock.addEventListener("click", () => {
  showRock();
  loteryIteam();
  game();
});
papper.addEventListener("click", () => {
  showPapper();
  loteryIteam();
  game();
});
scissors.addEventListener("click", () => {
  showScissors();
  loteryIteam();
  game();
});
function showRock() {
  let rockPick = "rock.svg";
  playerShow.src = rockPick.replace("90x90", "225x225");
  playerShow.style.display = "block";
}

function showPapper() {
  let papperPick = "papper.svg";
  playerShow.src = papperPick.replace("90x90", "225x225");
  playerShow.style.display = "block";
}

function showScissors() {
  let scissorsPick = "scissors.svg";
  playerShow.src = scissorsPick.replace("90x90", "225x225");
  playerShow.style.display = "block";
}
function loteryIteam() {
  for (i = 0; i < computerPicks.length; i++) {
    let item = computerPicks[Math.floor(Math.random() * computerPicks.length)];
    let pick = item;
    computerShow.src = pick.replace("90x90", "225x225");
    computerShow.style.display = "block";
  }
}
function game() {
    console.log(playerShow.src);
  if (playerShow.src === computerShow.src) {
    result.innerHTML = "This is draw";
    result.style.color = "#800000";
    result2.innerHTML = "This is draw";
    result2.style.color = "#800000";
  } else if (
    playerShow.src === "http://localhost/scisorspaperrock/rock.svg" &&
    computerShow.src === "http://localhost/scisorspaperrock/scissors.svg"
  ) {
    scorePlayer++;
    result.innerHTML = "Player win";
    result.style.color = "#4682B4";
    result2.innerHTML = "Player win";
    result2.style.color = "#4682B4";
    playerScore.innerHTML = scorePlayer;
  } else if (
    playerShow.src === "http://localhost/scisorspaperrock/rock.svg" &&
    computerShow.src === "http://localhost/scisorspaperrock/papper.svg"
  ){ scoreComputer++;
    result.innerHTML = "Computer win";
    result.style.color = "#00FA9A";
    result2.innerHTML = "Computer win";
    result2.style.color = "#00FA9A";
    computerScore.innerHTML = scoreComputer;}
    else if (
    playerShow.src === "http://localhost/scisorspaperrock/scissors.svg" &&
    computerShow.src === "http://localhost/scisorspaperrock/rock.svg"
  ) {
    scoreComputer++;
    result.innerHTML = "Computer win";
    result.style.color = "#00FA9A";
    result2.innerHTML = "Computer win";
    result2.style.color = "#00FA9A";
    computerScore.innerHTML = scoreComputer;
  } else if (
    playerShow.src === "http://localhost/scisorspaperrock/papper.svg" &&
    computerShow.src === "http://localhost/scisorspaperrock/rock.svg"
  ) {
    scorePlayer++;
    result.innerHTML = "Player win";
    result.style.color = "#4682B4";
    result2.innerHTML = "Player win";
    result2.style.color = "#4682B4";
    playerScore.innerHTML = scorePlayer;
  } else if (
    playerShow.src === "http://localhost/scisorspaperrock/scissors.svg" &&
    computerShow.src ==="http://localhost/scisorspaperrock/papper.svg"
  ) {
    scorePlayer++;
    result.innerHTML = "Player win";
    result.style.color = "#4682B4";
    result2.innerHTML = "Player win";
    result2.style.color = "#4682B4";
    playerScore.innerHTML = scorePlayer;
  } else if (
    playerShow.src === "http://localhost/scisorspaperrock/papper.svg" &
    computerShow.src === "http://localhost/scisorspaperrock/scissors.svg"
  ) {
    scoreComputer++;
    result.innerHTML = "Computer win";
    result.style.color = "#00FA9A";
    result2.innerHTML = "Computer win";
    result2.style.color = "#00FA9A";
    computerScore.innerHTML = scoreComputer;
} 
}

