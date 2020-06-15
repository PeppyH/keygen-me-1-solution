const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const key = [];
// generate the first 15 characters of the product key
let keyOrdTotal = 0;
for(let i = 0; i < 15; i++){
  // generate a random index to select a character from the above array
  const rand = Math.random();
  let randomIndex = Math.floor(rand * validChars.length);
  if(randomIndex === validChars.length){
    randomIndex -= 1;
  }
  const char = validChars[randomIndex];
  //add random valid character to key;
  key.push(char);
  // in the source we convert char to number and increment by 1
  // but because of how our valid chars are arranged, its literally just the array index. +1
  keyOrdTotal += (randomIndex+1)*(i+1);
}

console.log(key)
console.log(keyOrdTotal % 36); 