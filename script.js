const result = document.querySelector('.result');


const random = (min, max) => Math.random() * (max - min) + min;

const randomColors = ["#8400ff", "#2bff00", "#eaff00"];

for (let i = 0; i < 50; i++) {
  const li = document.createElement("li");

  const size = Math.floor(random(50, 120));
  const position = random(1, 94);
  const delay = random(5, 1);
  const duration = random(10, 40);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;

  li.style.backgroundColor = randomColors[Math.floor(random(0, 3))];

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, 
                                                   ${Math.random()}, ${Math.random()})`;

  ul.appendChild(li);
}

const playHuman = (humanChoice) => {
  console.log(humanChoice);
};

const playMachine = () => {
  const choices = ["pedra", "papel", "tesoura"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (human, machine) => {

  console.log('Humano:' + human + "maquina:" + machine )
if(human === machine){
result.innerHTML = "Deu empate!"

}else if(Quando o humando ganha){
result.innerHTML= "você ganhou!"

}else {
result.innerHTML = "Você perdeu para o James!"

}

}
