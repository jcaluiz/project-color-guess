function gerarCor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

function adivinhaCorH2() {
  let section1 = document.getElementById('section1');
  let h2Section1 = document.createElement('h2');
  section1.appendChild(h2Section1);
  h2Section1.setAttribute('id', 'rgb-color')


  h2Section1.innerText = gerarCor();
}
adivinhaCorH2();

function circulosDeCores() {
let section2 = document.getElementById('section2');
let section1Section2 = document.createElement('section');
section2.appendChild(section1Section2);
section1Section2.classList.add('ball');
section1Section2.style.backgroundColor = `rgb${gerarCor()}`;
let section2Section2 = document.createElement('section');
section2.appendChild(section2Section2);
section2Section2.classList.add('ball');
section2Section2.style.backgroundColor = `rgb${gerarCor()}`;
let section3Section2 = document.createElement('section');
section2.appendChild(section3Section2);
section3Section2.classList.add('ball');
section3Section2.style.backgroundColor = `rgb${gerarCor()}`;
let section4Section2 = document.createElement('section');
section2.appendChild(section4Section2);
section4Section2.classList.add('ball');
section4Section2.style.backgroundColor = `rgb${gerarCor()}`;
let section5Section2 = document.createElement('section');
section2.appendChild(section5Section2);
section5Section2.classList.add('ball');
section5Section2.style.backgroundColor = `rgb${gerarCor()}`;
let section6Section2 = document.createElement('section');
section2.appendChild(section6Section2);
section6Section2.classList.add('ball');
section6Section2.style.backgroundColor = `rgb${gerarCor()}`;
}
circulosDeCores();

