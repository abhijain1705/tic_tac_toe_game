var turn = "X";

var score = document.querySelector(".score");
var title = document.querySelector(".title");


const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

function whoWin() {
  let boxText = document.querySelectorAll(".boxText");
  console.log(boxText.length);
  let winningCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCond.forEach((e) => {
    if (
      boxText[e[0]].innerHTML === boxText[e[1]].innerHTML &&
      boxText[e[1]].innerHTML === boxText[e[2]].innerHTML &&
      boxText[e[1]].innerHTML !== ""
    ) {
      score.innerHTML = boxText[e[0]].innerHTML + " won.";
      title.style.visibility = "visible";
    }
  });

  if (
    (boxText[0].innerHTML == "X" || boxText[0].innerHTML == "0") &&
    (boxText[1].innerHTML == "X" || boxText[1].innerHTML == "0") &&
    (boxText[2].innerHTML == "X" || boxText[2].innerHTML == "0") &&
    (boxText[3].innerHTML == "X" || boxText[3].innerHTML == "0") &&
    (boxText[4].innerHTML == "X" || boxText[4].innerHTML == "0") &&
    (boxText[5].innerHTML == "X" || boxText[5].innerHTML == "0") &&
    (boxText[6].innerHTML == "X" || boxText[6].innerHTML == "0") &&
    (boxText[7].innerHTML == "X" || boxText[7].innerHTML == "0") &&
    (boxText[8].innerHTML == "X" || boxText[8].innerHTML == "0")
  ) {
    alert("match is tie");
  }
}

var boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", (e) => {
    if (boxText.innerHTML === "") {
      boxText.innerHTML = turn;
      turn = changeTurn();
      whoWin();
    }
  });
});
