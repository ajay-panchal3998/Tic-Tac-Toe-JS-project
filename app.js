let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#change_button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGameButton = document.querySelector("#new-btn")
let resetGameButton = document.querySelector("#reset-btn")

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];

const  resetGame = ()=>{
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide")
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicking!");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};


const showWinner = (Winner) => {
  msg.innerHTML = `Congrulations, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");  
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};


newGameButton.addEventListener("click", resetGame)
resetGameButton.addEventListener("click", resetGame)