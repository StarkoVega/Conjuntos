function interseccion() {
  let a = document.forms["conjuntos"]["conjuntos__input--a"].value;
  let b = document.forms["conjuntos"]["conjuntos__input--b"].value;
  a = a.split(",");
  b = b.split(",");
  let c = a.filter((value) => b.includes(value));
  c = c.join(",");
  document.querySelector(".conjuntos__output").innerHTML = c;
}
