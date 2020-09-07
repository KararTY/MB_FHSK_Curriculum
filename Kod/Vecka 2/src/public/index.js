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

const f = new IntersectionObserver(function (a) {
  for (let index = 0; index < a.length; index++) {
    const b = a[index]

    if (b.isIntersecting) {
      b.target.classList.remove('is-invisible')
      b.target.classList.add('animate__animated')

      if (b.target.classList.contains('right')) {
        b.target.classList.add('animate__fadeInRight')
      } else {
        b.target.classList.add('animate__fadeInLeft')
      }

      this.unobserve(b.target)
    }
  }
}, { threshold: [0] })

const g = document.querySelectorAll('.left')

for (let index = 0; index < g.length; index++) {
  const a = g[index]

  a.classList.add('is-invisible')

  f.observe(a)
}

const h = document.querySelectorAll('.right')

for (let index = 0; index < h.length; index++) {
  const a = h[index]

  a.classList.add('is-invisible')

  f.observe(a)
}

const i = document.querySelectorAll('[data-tone]')

for (let index = 0; index < i.length; index++) {
  const a = i[index]
  
  a.addEventListener('mousedown', function () {
    currentNote = playTone(this.dataset.tone)
  })

  a.addEventListener('mouseleave', noteMouseLeft)
  a.addEventListener('mouseup', noteMouseLeft)
}

function noteMouseLeft () {
  if (currentNote !== null) {
    currentNote.stop()
  }

  currentNote = null
}
