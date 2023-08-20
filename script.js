var timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
  let store = "";

  for (let i = 1; i <= 148; i++) {
    let rn = Math.floor(Math.random() * 10);
    store += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = store;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  let clickedNum = Number(details.target.textContent);

  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

// increaseScore();
getNewHit();
runTimer();
makeBubble();
