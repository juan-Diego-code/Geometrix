//1) Menú celular

const menuToggle = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function () {
  sidebar.classList.toggle('active');
});

//2) Calculadoras

// Cuadrado: área = lado * lado
document.getElementById('calcularCuadrado').addEventListener('click', function () {
  const lado = Number(document.getElementById('lado').value);
  const area = lado * lado;
  document.getElementById('resultadoCuadrado').textContent = 'Área: ' + area;
});

// Triángulo: área = (base * altura) / 2
document.getElementById('calcularTriangulo').addEventListener('click', function () {
  const base = Number(document.getElementById('base').value);
  const altura = Number(document.getElementById('altura').value);
  const area = (base * altura) / 2;
  document.getElementById('resultadoTriangulo').textContent = 'Área: ' + area;
});

// Círculo: área = π * radio^2
document.getElementById('calcularCirculo').addEventListener('click', function () {
  const radio = Number(document.getElementById('radio').value);
  const area = Math.PI * radio * radio;
  document.getElementById('resultadoCirculo').textContent = 'Área: ' + area.toFixed(2);
});

// Rombo: área = (diagonal1 * diagonal2) / 2
document.getElementById('calcularRombo').addEventListener('click', function () {
  const d1 = Number(document.getElementById('diagonal1').value);
  const d2 = Number(document.getElementById('diagonal2').value);
  const area = (d1 * d2) / 2;
  document.getElementById('resultadoRombo').textContent = 'Área: ' + area;
});