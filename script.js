const result = document.querySelector('.result');
const yourScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
  PEDRA: "pedra",
  PAPEL: "papel",
  TESOURA: "tesoura",

}

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (human, machine) => {

  console.log('Humano:' + human + "Maquina:" + machine )

  if(human === machine){
result.innerHTML = "Deu empate!"

}else if(
(human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
  (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
  (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
){
  humanScoreNumber++;
  yourScore.innerHTML = humanScoreNumber;
result.innerHTML= "você ganhou!"

}else {

  machineScoreNumber++;
  machineScore.innerHTML = machineScoreNumber;
result.innerHTML = "Você perdeu para o James!"

}

}
