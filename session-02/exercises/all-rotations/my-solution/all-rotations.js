function leftRotations(str) {
  //console.log(str)

  const letter = str.split("");
  const arr = [str];
  for (let i = 1; i < str.length; i++) {
    const result1 = letter.shift(); //+ "|"+letter.join("") + letter;
    const result2 = letter;
    const result3 = letter.join("") + result1;
    const resultTotal = result2.push(result1);
    //console.log(letter)
    arr.push(result3);
    //console.log("Arr: " + letter)
    //console.log("1: "+result1)
    //console.log("2: " + result2.push(result1))
    //console.log(result3);
    //const resultTotal = letter.join('') + result1;
  }
  return arr;
  //bca
  // bc = cb
  // c = c
  //console.log(resultTotal)
  //const letter = str.split('');
  //console.log(letter)//	["a","b","c"]
  //const result1 = letter.shift();//a
  //const result2= letter;//["b","c"]
  //const result3= letter.join('') + result1; //	bca
  //console.log(result3)
}

function rightRotations(str) {
  const letter = str.split("");
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const result1 = letter.pop(); //+ "|"+letter.join("") + letter;
    const result2 = letter;
    const result3 = letter.join("") + result1;
    const resultTotal = result2.unshift(result1);
    //console.log(letter)
    arr.push(result3);
    //console.log("Arr: " + letter)
    //console.log("1: "+result1)
    //console.log("2: " + result2.unshift(result1))
    //console.log(result3);
    //const resultTotal = letter.join('') + result1;
    //console.log(arr);
  }
  return arr;
}
console.log(leftRotations("abcdef"));
console.log(rightRotations("abcdef"));
