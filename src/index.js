import { createHomePage } from "./home";


document.addEventListener('DOMContentLoaded', () =>
  createHomePage()
);


document.addEventListener('DOMContentLoaded',() =>{
    const homeTab = document.getElementById('home-tab')
    homeTab.addEventListener('click', createHomePage)
})


import { createMenuPage } from "./menu";

document.addEventListener('DOMContentLoaded',() =>{
    const menuTab = document.getElementById('menu-tab')
    menuTab.addEventListener('click', createMenuPage)
})



import { creatAboutPage } from "./about";

document.addEventListener('DOMContentLoaded',() =>{
    const aboutTab = document.getElementById('about-tab')
    aboutTab.addEventListener('click', creatAboutPage)
})

