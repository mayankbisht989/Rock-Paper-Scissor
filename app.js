// let userscore=0;
// let compscore=0;


// const choices=document.querySelectorAll(".choice");
// const msg=document.querySelector("#msg");

// const userscorepara=document.querySelector("#user-score");
// const compscorepara=document.querySelector("#comp-score");


// const gencompchoice=()=>{
//     const options =["rock","paper","scissors"];
//     const randIdx =Math.floor(Math.random() *3);
//     return options[randIdx];
// };
// const drawgame =()=>{
//     // console.log("game was draw.");
//     msg.innerText("game was draw.play gain");
//     msg.style.backgroundColor="#081b31";
// };
// const showwinner =(userwin,userchoice,compchoice)=>{
//     if(userwin){
//         userscore++;
//         userscorepara.innerText=userscore;

//         // console.log("you win!");
//         msg.innerText=`you win! your ${userchoice}beats ${compchoice}`;
//         msg.style.backgroundColor="green"
//     }else{
//         compscore++;
//         compscore.para.innertext=compscore;
//         // console.log("you lost");
//          msg.innerText=`you lost.${compchoice} beats your ${userchoice}`;
//          msg.Style.backgroundColor="red"
//     }

// };


// const playgame=(userchoice)=>{
//     console.log("userchoice=",userchoice);
//     // generate computer choice

//     const compchoice=gencompchoice();
//     console.log("comp choice=",compchoice);

//     if(userchoice ==compchoice){
//         //draw game
//         drawgame();
//     }else{
//         let userwin=true;
//         if(userchoice ==="rock"){
//             //scissors,paper
//             userwin=compchoice==="paper"?false:true;
//         }else if(userchoice==="paper"){
//             //rock,scissores
//             userwin =compchoice==="scissors"?false:true;
//         }else{
//             //rock,paper
//             userwin=compchoice==="rock"?false:true;
//         }
//         showwinner(userwin,userchoice,compchoice);
//     }

// };



// choices.forEach((choice) =>{
//     // console.log(choice);
//     choice.addEventListener("click",()=>{
//         const userchoice=choice.getAttribute("Id");
//         // console.log("choice was clicked",userchoice);
//         playgame(userchoice);
//     });
// });
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});