
const imgClick = document.querySelector('.content__img')
const cardDolt = document.querySelector('.content__back')
const closeClick = document.querySelector('.contact__box-icon')
const registerClick = document.querySelector('.login__register-link')
const loginClick = document.querySelector('.register__a-link')
const loginPainel = document.querySelector('.login__painel')
const registerPainel = document.querySelector('.register__painel')
const contentContainer = document.querySelector('.content__container')
const registerContainer = document.querySelector('.register')
const loginContainer = document.querySelector('.login')

imgClick.addEventListener('click', () => {

    imgClick.classList.add('slipLeft')
    cardDolt.classList.remove('hidden')
    cardDolt.classList.add('show')

})

closeClick.addEventListener('click', () => {

    cardDolt.classList.remove('show')
    cardDolt.classList.add('hidden')
    imgClick.classList.remove('slipLeft')
    imgClick.classList.add('show')
})

registerClick.addEventListener('click', () => {

    loginContainer.classList.add('hidden__login')
    registerContainer.classList.remove('hidden__register')
    registerContainer.classList.add('show__register')

})

loginClick.addEventListener('click', () => {


    registerContainer.classList.add('hidden__register')
    registerContainer.classList.remove('show__register')
    loginContainer.classList.add('hidden__login')

})
