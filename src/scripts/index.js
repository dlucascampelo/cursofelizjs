const root = document.querySelector("#root");

function newElement(tag, content) {
  const title = `<${tag}>${content}</${tag}>`;

  root.insertAdjacentHTML("beforebegin", title); //Caso queira mudar a posição do elemento, mudar o "beforebegin" para uma das outras opções do método
}
newElement("h1", "dificuldade");
