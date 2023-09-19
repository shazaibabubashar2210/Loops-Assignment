// Task01
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
// Task02
for (let i = 0; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Task03
let firstNum = 0;
let secondNum = 1;
console.log(firstNum);
console.log(secondNum);
let nextTerm = firstNum + secondNum;
for (let i = 0; i < 21; i++) {
  console.log(nextTerm);
  firstNum = secondNum;
  secondNum = nextTerm;
  nextTerm = firstNum + secondNum;
}

//Task04
let num=parseInt(prompt("Enter any number to print it's Table",""));
console.log("You Can Enter the number",num);
console.log(`Table of ${num}`);
for(let i=1;i<=10;i++)
{
    console.log(`${num} X ${i} = ${num*i}`);
}

// Task05;
let calculateAverage = (DolphinTeam, Koalas) => {
  let Dsum = 0;
  let Ksum = 0;

  for (let i = 0; i < DolphinTeam.length; i++) {
    Dsum += DolphinTeam[i];
  }
  let DolphinScore = Dsum / 3;

  for (let i = 0; i < Koalas.length; i++) {
    Ksum += Koalas[i];
  }
  let KoalasScore = Ksum / 3;

  if (DolphinScore > KoalasScore) {
    console.log(
      `Dolphin Score is ${DolphinScore} which is greater than Koalas Score ${KoalasScore}! So Dolhphine Team is Winner!!!`
    );
  } else if (DolphinScore < KoalasScore) {
    console.log(
      `Dolphin Score is ${DolphinScore} which is less than Koalas Score ${KoalasScore}! So Koalas Team is Winner!!!`
    );
  } else {
    console.log(
      `Dolphin Score is ${DolphinScore} which is equal to Koalas Score ${KoalasScore}! So it is a Draw!`
    );
  }
};
// For Checking of 1 Time
let DolphinTeam = [96, 108, 89];
let Koalas = [88, 91, 110];
console.log("First Time");
calculateAverage(DolphinTeam, Koalas);
// For the Checking of 2nd Time
console.log("Second Time");
DolphinTeam = [97, 112, 101];
Koalas = [109, 95, 123];

calculateAverage(DolphinTeam, Koalas);
// Third Time
console.log("Third Time");
DolphinTeam = [97, 112, 101];
Koalas = [109, 95, 106];

calculateAverage(DolphinTeam, Koalas);
