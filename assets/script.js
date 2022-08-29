const isMobile = window.innerWidth < 480
function init() {
    const blur = document.querySelector(".blur") 
    blur.onclick = () => { 
        this.parentNode.nextElementSibling.click()
    }
    const menu = document.querySelector(".menu")  
    const menuButton = document.querySelector(".menu-button") 
    menuButton.onclick = () => {
        menuButton.classList.toggle('active')
        menu.classList.toggle('open')
    }
    const menuSectionLinks = menu.querySelectorAll("a[href^='#']")
    Array.from(menuSectionLinks).forEach(link => {
        link.onclick = () => {
            menuButton.classList.toggle('active')
            menu.classList.toggle('open')
        }
    })
}
if (isMobile) {
    init()
}