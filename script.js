function adivinhaCorH2() {
  let section1 = document.getElementById('section1');
  let h2Section1 = document.createElement('h2');
  section1.appendChild(h2Section1);
  h2Section1.setAttribute('id', 'rgb-color')

  function gerarCor() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    return `(${r}, ${g}, ${b})`;
  }

  h2Section1.innerText = gerarCor();
}
adivinhaCorH2();
