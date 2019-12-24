let calculator=(num1, op, num2)=>{
  if(op === "/" && num2 === 0){
    return `Can't divide by 0!`;
  }
  else{
    switch(op){
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
    }
  }
}

console.log(calculator(2, '/', 2));
console.log(calculator(18, '+', 7));
console.log(calculator(123, '-', 567));
console.log(calculator(28, '*', 34));
console.log(calculator(827313, '/', 0));



