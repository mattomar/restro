import { createHomePage } from "./home";

document.addEventListener('DOMContentLoaded',() =>{
    const homeTab = document.getElementById('home-tab')
    homeTab.addEventListener('click', createHomePage)
})