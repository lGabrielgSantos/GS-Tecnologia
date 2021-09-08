/* dicionario 
querrySelector  para pegar os dados de uma variavel
querrySelectorALL todos
*/

/* abre e fecha menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, fechar menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll */
const header = document.querySelector('#header')
const navHeigth = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeigth) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*ScrollReveal mostrar elemntos scroll*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*back to top*/

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/*email*/

function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById('toName').value,
    to_name: document.getElementById('fromEmail').value,
    message: document.getElementById('msg').value
  }

  emailjs
    .send('gmailMessage', 'template_yb3n3jn', tempParams)
    .then(function (res) {
      alert('sucess', res.status)
    })
}
