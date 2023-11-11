const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name Nicknames are also acceptable :) `, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

r2.question(`What's and activity you like doing?`, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r2.close();
});

r3.question('What do you listen to while doing that? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r3.close();
});

r4.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r4.close();
});

r5.question(`What's your favourite thing to eat for that meal? `, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r5.close();
});