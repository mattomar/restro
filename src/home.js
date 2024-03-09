export function setHTMLContent(html) {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = html
}


export function createHomePage() {
    const homeContent =
        `  <div class="home-content">
    <div class="home-text"><span class="welcome"> welcome to <b>Pizza For You</b></span><br> <span class="hero-content">
        the savory world of
        authentic Italian flavors at
        Bella Pizzeria. From our crispy<br> thin crusts to our mouthwatering toppings, each slice promises a culinary
        journey<br>
        straight to Italy. Treat yourself to our specialty pizzas, expertly crafted to tantalize<br> your taste buds.
        From the
        robust flavors of our Meat Lover's to the refreshing zest<br> of our Veggie Delight, each specialty pizza is a
        masterpiece of flavor and texture.</span></div>
    <div class="img-contain">
      <img src="imgs/pizza-hero.png" alt="a picture of a pizza" class="hero-image">
    </div>
`

setHTMLContent(homeContent)
}