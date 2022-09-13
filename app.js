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

function reiniciar(seccion) {
  document.querySelectorAll(seccion).forEach((element) => {
    element.value = "";
  });
}

function ejemplo(num, seccion) {
  switch (num) {
    case 1:
      document.querySelector(seccion + "--a").value = "a, b, c, d";
      document.querySelector(seccion + "--b").value = "c, d, e, f";
      break;
    case 2:
      document.querySelector(seccion + "--a").value = "1, 2, 3, 4, 5";
      document.querySelector(seccion + "--b").value = "4, 5, 6, 7, 8";
      break;
    case 3:
      document.querySelector(seccion + "--a").value = "a, e, i, o, u";
      document.querySelector(seccion + "--b").value = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
      break;
    case 4:
      document.querySelector(seccion + "--a").value = "0, 2, 4, 6, 8";
      document.querySelector(seccion + "--b").value = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
    default:
      break;
  }
}
