const restangles = document.querySelector('.navbar__toggler'),
      shadow = document.querySelector('.shadow'),
      navbarMenu = document.querySelector('.navbar__menu'),
      btnBlock = document.querySelector('.navbar__btn')

restangles.addEventListener('click', () => {
     restangles.classList.toggle('linelyBtn')
     shadow.classList.toggle('show')
     navbarMenu.classList.toggle('visible')
     btnBlock.classList.toggle('blockBtn')
})

const lable = document.querySelector('.navbar__switch'),
      round = document.querySelector('.navbar__switchBtn'),
      block = document.querySelector('.block'),
      cards = document.querySelector('.cards'),
      header = document.querySelector('header'),
      he1 = document.querySelector('h1')
      he2 = document.querySelector('h2')
      he3 = document.querySelector('h3')
      he4 = document.querySelector('h4')

lable.addEventListener('click', () => {
     round.classList.add('darkBtn')
     block.classList.add('dark')
     cards.classList.add('dark')
     header.classList.add('darkon')
     he1, he2.classList.add('coloradr')
     // he2.classList.add('coloradr')
     he3.classList.add('coloradr')
     he4.classList.add('coloradr')
})