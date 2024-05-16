//Fibonacci: é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores. Ex:
//Input: 5
//Output: 0, 1, 1, 2, 3
//Input: 8
//Output: 0, 1, 1, 2, 3, 5, 8, 13
const { createSandbox } = require("sinon");
const Fibonacci = require("./fibonacci");
const sinon = createSandbox();

const fibonacci = new Fibonacci();
;(async () => {
  {
    for (const sequencia of fibonacci.execute(3)) {
      console.log(sequencia);
    }
  }
})();
