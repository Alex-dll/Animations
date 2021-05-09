feather.replace();
let selectedMenuId = 1;

const menu = document.getElementById("menu");
const boardLeft = document.getElementById("board-left");
const boardRight = document.getElementById("board-right");
const flexBoard = document.getElementById("flex-board");
const illustration = document.getElementById("illustration");

const contentList = [
  {img:"./assets/surf.png"},
  {img: "./assets/practice surf.png"},
  {img: "./assets/luau.png"}
]

document.getElementById("bl-1").scrollIntoView();

menu.addEventListener("click", changeContent);

function changeContent(event) {
  const target = event.target.id;

  if (target === "menu" || target === "" || target == selectedMenuId) {
    return;
  }

  // selection off menu
  document.getElementById(target).classList.add("selected"); 
  document.getElementById(selectedMenuId).classList.remove("selected");

  //scroll off boards
  const offset = selectedMenuId - target;
  boardLeft.scrollTop -= offset * 370;
  boardRight.scrollTop += offset * 370;
  
  //flex board controls
  flexBoard.classList.add("flex-board-close");
  setTimeout(function () {
    illustration.src = contentList[target-1].img;
    flexBoard.classList.remove("flex-board-close");
    flexBoard.classList.add("flex-board-open");
  }, 500);

  selectedMenuId = target;

}
