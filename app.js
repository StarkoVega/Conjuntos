function trimmer(element) {
  if (element[0] === " ") {
    element = element.split("");
    element.shift();
    return element.join("");
  }
  return element;
}

function interseccion() {
  let a = document.querySelector(".interseccion--a").value;
  let b = document.querySelector(".interseccion--b").value;
  a = a.split(",");
  b = b.split(",");
  a = a.map((element) => trimmer(element));
  b = b.map((element) => trimmer(element));
  let c = a.filter((value) => b.includes(value));
  c = c.join(", ");
  document.querySelector(".interseccion--resultado").value = c;
}

function union() {
  let a = document.querySelector(".union--a").value;
  let b = document.querySelector(".union--b").value;
  a = a.split(",");
  b = b.split(",");
  a = a.map((element) => trimmer(element));
  b = b.map((element) => trimmer(element));
  let c = a;
  b.forEach((element) => {
    if (!a.includes(element)) {
      c.push(element);
    }
  });
  c = c.join(", ");
  document.querySelector(".union--resultado").value = c;
}

function diferencia() {
  let a = document.querySelector(".diferencia--a").value;
  let b = document.querySelector(".diferencia--b").value;
  a = a.split(",");
  b = b.split(",");
  a = a.map((element) => trimmer(element));
  b = b.map((element) => trimmer(element));
  let c = a.filter((value) => !b.includes(value));
  c = c.join(", ");
  document.querySelector(".diferencia--resultado").value = c;
}

function complemento() {
  let a = document.querySelector(".complemento--a").value;
  let b = document.querySelector(".complemento--b").value;
  a = a.split(",");
  b = b.split(",");
  a = a.map((element) => trimmer(element));
  b = b.map((element) => trimmer(element));
  let c = b.filter((value) => !a.includes(value));
  c = c.join(", ");
  document.querySelector(".complemento--resultado").value = c;
}

function reiniciar() {
  document.querySelectorAll(".form__input").forEach((element) => {
    element.value = "";
  });
}

function ejemplo1() {
  document.querySelector(".interseccion--a")
}