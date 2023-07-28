const btnAside = document.querySelector('.btn__aside')
const aside = document.querySelector('.lateral__menu')
const mainPage = document.querySelector('main')
const btnMob = document.querySelector('#nav__mobile')
var coll = document.getElementsByClassName("openContent");
var i;

btnMob.addEventListener('click', () => {
    aside.classList.toggle('open')    
})


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("opened");      
    var content = this.nextElementSibling;
      if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }   
  });  
}

btnAside.addEventListener('click', () => {
  aside.classList.toggle('asideClose')
  mainPage.classList.toggle('asideClose')  
})


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiperCard = new Swiper(".cardsSwipper", {
  slidesPerView: 6,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    999: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    1449: {
      slidesPerView: 5,
      spaceBetween: 50
    }
  }
});
//
const modal = document.querySelector('#modalDeposit')
const btnModal = document.querySelector('#depositBtn')
const closeModal = document.querySelector('#close')

btnModal.addEventListener('click', () => {
  modal.classList.toggle('open')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('open')
})
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('open')
  }
}

// MODAL DE LOGIN CODE
const openModalBtn = document.getElementById("openModalBtn");
const modalLogin = new bootstrap.Modal(document.getElementById("modal"), { backdrop: false });

openModalBtn.addEventListener("click", function () {
  modalLogin.show();
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Aqui você pode fazer o tratamento do login, como enviar os dados para um servidor, por exemplo.
  console.log("Usuário:", username);
  console.log("Senha:", password);

  // Limpar os campos após o login ser processado (apenas para este exemplo)
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  modalLogin.hide();
});

// MODAL DE CADASTRO
const openModalCadBtn = document.getElementById("openModalCadBtn");
const modalCadastro = new bootstrap.Modal(document.getElementById("modalCad"), { backdrop: false });

openModalCadBtn.addEventListener("click", function () {
  modalCadastro.show();
});

document.getElementById("cadastroForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Aqui você pode fazer o tratamento do cadastro, como enviar os dados para um servidor, por exemplo.
  console.log("Nome:", name);
  console.log("E-mail:", email);
  console.log("Data de Nascimento:", `${day}/${month}/${year}`);
  console.log("Senha:", password);
  console.log("Repetir Senha:", confirmPassword);

  // Limpar os campos após o cadastro ser processado (apenas para este exemplo)
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  modalCadastro.hide();
});


