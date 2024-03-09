export function setHTMLContent(html) {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = html
}


export function createMenuPage() {
    const MenuContent =
    `
    <div class="card-container">
    <div class="card">
      <div class="card-flex-container">
        <img src="imgs/pizza-hero.png" alt="pizza photo in the menu" class="menu-pic">
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-flex-container">
        <img src="imgs/pizza-hero.png" alt="pizza photo in the menu" class="menu-pic">
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-flex-container">
        <img src="imgs/pizza-hero.png" alt="pizza photo in the menu" class="menu-pic">
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-flex-container">
        <img src="imgs/pizza-hero.png" alt="pizza photo in the menu" class="menu-pic">
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-flex-container">
        <img src="imgs/pizza-hero.png" alt="pizza photo in the menu" class="menu-pic">
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-flex-container">
        <img src="imgs/pizza-hero.png" alt="pizza photo in the menu" class="menu-pic">
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-flex-container">
        <img src="imgs/pizza-hero.png" alt="pizza photo in the menu" class="menu-pic">
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consectetur.</p>
      </div>
    </div>
  </div>`
setHTMLContent(MenuContent)
}