const a = document.querySelector('.apple-darkred')
const b = document.querySelector('.apple-lightred')
const c = document.querySelector('.apple-orange')
const d = document.querySelector('.apple-green')

const e = document.querySelectorAll('.navbar-burger[data-target]')

a.classList.add('animate__animated', 'animate__faster', 'animate__fadeInRight')
b.classList.add('animate__animated', 'animate__faster', 'animate__fadeInUp')
c.classList.add('animate__animated', 'animate__faster', 'animate__fadeInLeft')
d.classList.add('animate__animated', 'animate__faster', 'animate__fadeInDown')

a.addEventListener('animationend', function () {
  const a = document.querySelector('.marieborg-titel')
  a.classList.remove('is-hidden')
  a.classList.add('animate__animated', 'animate__faster', 'animate__fadeInDown')
})

for (let index = 0; index < e.length; index++) {
  const a = e[index]

  a.addEventListener('click', function () {
    const a = document.querySelector(`.navbar-menu[data-name="${this.dataset.target}"]`)
    a.classList.toggle('is-active')
  })
}
