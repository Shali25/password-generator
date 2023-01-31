const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatePass = document.getElementById("generate-passwords");
const displayOne = document.getElementById("display1");
const displayTwo = document.getElementById("display2");

generatePass.addEventListener("click", function () {
  let d1 = randomNumber();
  let d2 = randomNumber();
  let d3 = randomNumber();
  let d4 = randomNumber();
  let d5 = randomNumber();
  let d6 = randomNumber();
  let d7 = randomNumber();
  let d8 = randomNumber();
  let d9 = randomNumber();
  let d10 = randomNumber();
  let d11 = randomNumber();
  let d12 = randomNumber();
  let d13 = randomNumber();
  let d14 = randomNumber();
  let d15 = randomNumber();
  let passLine =
    d1 +
    d2 +
    d3 +
    d4 +
    d5 +
    d6 +
    d7 +
    d8 +
    d9 +
    d10 +
    d11 +
    d12 +
    d13 +
    d14 +
    d15;
  displayOne.textContent = passLine;
});

generatePass.addEventListener("click", function () {
  let d1 = randomNumber();
  let d2 = randomNumber();
  let d3 = randomNumber();
  let d4 = randomNumber();
  let d5 = randomNumber();
  let d6 = randomNumber();
  let d7 = randomNumber();
  let d8 = randomNumber();
  let d9 = randomNumber();
  let d10 = randomNumber();
  let d11 = randomNumber();
  let d12 = randomNumber();
  let d13 = randomNumber();
  let d14 = randomNumber();
  let d15 = randomNumber();
  let passLine =
    d1 +
    d2 +
    d3 +
    d4 +
    d5 +
    d6 +
    d7 +
    d8 +
    d9 +
    d10 +
    d11 +
    d12 +
    d13 +
    d14 +
    d15;
  displayTwo.textContent = passLine;
});

function randomNumber() {
  let choosenNum = Math.floor(Math.random() * characters.length);
  for (let i = 0; i < characters.length; i++) {
    let random = characters[choosenNum];
    return random;
  }
}
