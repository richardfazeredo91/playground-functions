// Iniciando projeto

// Desafio 1
function compareTrue(yes, no) {
  let boolean = yes && no
  return boolean;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(sentense) {
  let divideSentense = sentense.split(' ');
  return divideSentense;
}

// Desafio 4
function concatName(arr) {
  let concatElements = `${arr[arr.length - 1]}, ${arr[0]}`;
  return concatElements;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultGame = (wins * 3) + (ties * 1);
  return resultGame;
}

// Desafio 6
function highestCount(numbers) {
  let maior = -Infinity;
  let countRepeated = 0;

  for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > maior){
      maior = numbers[i];
    }
  }

  for(let num of numbers){
    if(num === maior){
      countRepeated += 1;
    }
  }
  return countRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return 'cat1';
  }else 
    if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
      return 'cat2';
    }else{
      return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let resultArr = []
  
  for(let num of numbers){
    if(num % 3 === 0 && num % 5 === 0){
      resultArr.push("fizzBuzz");
    }else 
      if(num % 3 === 0){
        resultArr.push("fizz");
      }else 
        if(num % 5 === 0){
          resultArr.push("buzz");
      }else{
        resultArr.push('bug!');
    }
  }
  return resultArr;
}

// Desafio 9
function encode(strings) {
  return strings
  .replace(/a/g, '1')
  .replace(/e/g, '2')
  .replace(/i/g, '3')
  .replace(/o/g, '4')
  .replace(/u/g, '5')
}

function decode(numbers) {
  return numbers
  .replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u')
}

// Desafio 10
function techList(arrTech, name) {
  let tectsSorted = arrTech.sort();
  let techs = [];

  for(let item of tectsSorted){
    techs.push({
      ["tech"] : item,
      ["name"] : name 
    });
  }

  if(techs.length === 0){
    return 'Vazio!';
  }else{
    return techs;
  }
}

// Desafio 11
function generatePhoneNumber(telephone) {
  if(telephone.length !== 11){
    return "Array com tamanho incorreto.";
  }
  
  let countRepeated = 0;
  for(let i = 0; i < telephone.length; i += 1){
    if(telephone[i] < 0 || telephone[i] > 9 || countRepeated >= 2){
      return "não é possível gerar um número de telefone com esses valores";
    }
    if(i !== telephone.indexOf(telephone[i])){
      countRepeated += 1;
    }
  }
  return telephone
  .join('')
  .replace(/(\d{2})(\d{5})(\d{4})/,
   "($1) $2-$3");
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
