const drdw = document.querySelector(".hamba")
const nava = document.querySelector(".nav1")
const canc = document.querySelector(".close-menu")

drdw.addEventListener('click', () =>{
      drdw.classList.toggle('visible')
      nava.classList.toggle('visible')
      canc.classList.toggle('visible')
})

canc.addEventListener('click', () =>{
      drdw.classList.toggle('visible')
      nava.classList.toggle('visible')
      canc.classList.toggle('visible')
})
