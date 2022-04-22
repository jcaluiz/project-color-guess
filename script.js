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
  let section2Section2 = document.createElement('section');
  section2.appendChild(section2Section2);
  section2Section2.classList.add('ball');
  let section3Section2 = document.createElement('section');
  section2.appendChild(section3Section2);
  section3Section2.classList.add('ball');
  let section4Section2 = document.createElement('section');
  section2.appendChild(section4Section2);
  section4Section2.classList.add('ball');
  let section5Section2 = document.createElement('section');
  section2.appendChild(section5Section2);
  section5Section2.classList.add('ball');
  let section6Section2 = document.createElement('section');
  section2.appendChild(section6Section2);
  section6Section2.classList.add('ball');


  section1Section2.style.backgroundColor = `rgb${gerarCor()}`;
  section2Section2.style.backgroundColor = `rgb${gerarCor()}`;
  section3Section2.style.backgroundColor = `rgb${gerarCor()}`;
  section4Section2.style.backgroundColor = `rgb${gerarCor()}`;
  section5Section2.style.backgroundColor = `rgb${gerarCor()}`;
  section6Section2.style.backgroundColor = `rgb${gerarCor()}`;

  let idRgb = document.querySelector('#rgb-color');
  let index = parseInt(Math.random() * 6);
  if (index < 1) {
    index = parseInt(Math.random() * 6);
  }
  if (index === 1) {
    section1Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
  } else if (index === 2) {
    section2Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
  } else if (index === 3) {
    section3Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
  } else if (index === 4) {
    section4Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
  } else if (index === 5) {
    section5Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
  } else if (index === 6) {
    section6Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
  }

  let botaoResetar = document.querySelector('#reset-game');

  botaoResetar.addEventListener('click', function () {
    let answer = document.querySelector('#answer');
    answer.innerText = 'Escolha uma cor';
    let rgbColor = document.querySelector('#rgb-color');
    rgbColor.innerText = gerarCor();
    section1Section2.style.backgroundColor = `rgb${gerarCor()}`;
    section2Section2.style.backgroundColor = `rgb${gerarCor()}`;
    section3Section2.style.backgroundColor = `rgb${gerarCor()}`;
    section4Section2.style.backgroundColor = `rgb${gerarCor()}`;
    section5Section2.style.backgroundColor = `rgb${gerarCor()}`;
    section6Section2.style.backgroundColor = `rgb${gerarCor()}`;

    let idRgb = document.querySelector('#rgb-color');
    let index = parseInt(Math.random() * 6);
    if (index < 1) {
      index = parseInt(Math.random() * 6);
    }
    if (index === 1) {
      section1Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
    } else if (index === 2) {
      section2Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
    } else if (index === 3) {
      section3Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
    } else if (index === 4) {
      section4Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
    } else if (index === 5) {
      section5Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
    } else if (index === 6) {
      section6Section2.style.backgroundColor = `rgb${idRgb.innerText}`;
    }
    console.log(index)
  })

}
circulosDeCores();

function verificaSeAcertouACor() {
  let section3 = document.querySelector('#section3');
  let h2Section3 = document.createElement('h2');
  section3.appendChild(h2Section3);
  h2Section3.setAttribute('id', 'answer');
  let answer = document.querySelector('#answer');
  answer.innerText = 'Escolha uma cor';
  let idRgb = document.querySelector('#rgb-color');
  const classBall = document.getElementsByClassName('ball');

  for (let index = 0; index < classBall.length; index += 1) {
    classBall[index].addEventListener('click', function (event) {
      if (event.target.style.backgroundColor === 'rgb' + idRgb.innerText) {
        return answer.innerText = "Acertou!";
      } else {
        return answer.innerText = "Errou! Tente novamente!";
      }
    })
  }

  function placar() {
    let h3Placar = document.querySelector('#score');
    let placar = 0;
    h3Placar.innerText = 'Placar: ' + placar;
    for (let index = 0; index < classBall.length; index += 1) {
      classBall[index].addEventListener('click', function (event) {
        if (event.target.style.backgroundColor === 'rgb' + idRgb.innerText) {
          placar = placar + 3;
          return h3Placar.innerText = 'Placar: ' + placar;
        } else if (event.target.style.backgroundColor !== 'rgb' + idRgb.innerText && placar > 0) {
          placar = placar - 1;
          return h3Placar.innerText = 'Placar: ' + placar;
        }
      })
    }
  }

  placar();
}
verificaSeAcertouACor()
