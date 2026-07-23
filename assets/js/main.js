//1) Menu celular

const menuToggle = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function () {
  sidebar.classList.toggle('active');
});

//2) Calculadoras

// Cuadrado: area = lado * lado
document.getElementById('calcularCuadrado').addEventListener('click', function () {
  const lado = Number(document.getElementById('lado').value);
  const area = lado * lado;
  document.getElementById('resultadoCuadrado').textContent = 'Area: ' + area;
});

// Triangulo: area = (base * altura) / 2
document.getElementById('calcularTriangulo').addEventListener('click', function () {
  const base = Number(document.getElementById('base').value);
  const altura = Number(document.getElementById('altura').value);
  const area = (base * altura) / 2;
  document.getElementById('resultadoTriangulo').textContent = 'Area: ' + area;
});

// Circulo: area = n * radio^2
document.getElementById('calcularCirculo').addEventListener('click', function () {
  const radio = Number(document.getElementById('radio').value);
  const area = Math.PI * radio * radio;
  document.getElementById('resultadoCirculo').textContent = 'Area: ' + area.toFixed(2);
});

// Rombo: area = (diagonal1 * diagonal2) / 2
document.getElementById('calcularRombo').addEventListener('click', function () {
  const d1 = Number(document.getElementById('diagonal1').value);
  const d2 = Number(document.getElementById('diagonal2').value);
  const area = (d1 * d2) / 2;
  document.getElementById('resultadoRombo').textContent = 'Area: ' + area;
});