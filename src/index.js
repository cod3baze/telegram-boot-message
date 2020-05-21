// 1 - escopo
// 2 - muito usado para percorrer variáveis compostas | repetição em um intervalo
// 3 - expressam condições

// 1ª

var first = "antigo";

const handle_var = () => {
  let first = "novo";
};

// 2ª | 3ª
const words = ["a", "b", "c", "d", "e", "f"];

const handle_loop = (type) => {
  n = 0;
  if (type === "while") {
    console.log("------------------");
    console.log("Usando while");
    while (n <= 5) {
      console.log(words[n]);
      n++;
    }
    console.log("------------------");
    console.log("------------------");
  } else {
    console.log("------------------");
    console.log("Usando for");
    for (let index = 0; index <= 5; index++) {
      console.log(words[index]);
    }
    console.log("------------------");
    console.log("------------------");
  }

  return;
};

handle_loop("while");
