const userIcon = document.getElementById("user__icon")
const loginLink = document.getElementById("link__login")

loginLink.onmouseenter = () =>{
    userIcon.style.transform = "translateY(-2px)"
}
loginLink.onmouseleave = () =>{
    userIcon.style.transform = "translateY(0px)"
}

const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')

iconMenu.addEventListener("click",()=>{
    menuBody.classList.toggle('active')
    iconMenu.classList.toggle('active')
    document.body.classList.toggle('lock')
})