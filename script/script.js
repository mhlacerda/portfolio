		
function clickMenu() {
  if (itensMenu.style.display == "block") {
    itensMenu.style.display = "none";
  } else {
    itensMenu.style.display = "block";
  }
}

function telaMaior(){
  if(window.innerWidth >= 768) {
    itensMenu.style.display = "flex";
  } else {
    itensMenu.style.display = "none";
  }
  };

const linksMenu = document.querySelectorAll('li'); // Seleciona todos os links do menu

linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    itensMenu.style.display = "none"; // Fecha o menu
  });
});


const container = document.querySelector(".div_projetos");
const btnEsquerda = document.querySelector(".seta-esquerda");
const btnDireita = document.querySelector(".seta-direita");

btnEsquerda.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" }); // Rola para a esquerda
});

btnDireita.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" }); // Rola para a direita
});
