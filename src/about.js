export function setHTMLContent(html) {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = html
}


export function creatAboutPage(){
    const aboutContent =
    `
    <div class="about">
    <div class="about-title"><b>About Us</b></div>
    <div class="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error. Magnam
      veritatis incidunt excepturi? Nisi quaerat facilis molestiae, totam fugit libero blanditiis accusantium, fuga
      minus minima iste ex. Iste perferendis repudiandae cum in, vitae consectetur sint temporibus commodi ipsum,
      doloribus atque ab corrupti praesentium possimus libero! Reprehenderit quod consequuntur rem quidem veritatis ab
      nobis architecto pariatur, deleniti placeat, porro autem perferendis iure. Aliquid, officia? Porro illo iure rerum
      quam laboriosam laborum ratione deserunt odio magni quidem accusamus minima voluptas facere enim, quaerat debitis
      ut. Obcaecati debitis culpa nemo? Dicta cumque, inventore officiis doloremque eius odit nam? Beatae accusantium
      placeat sequi! fugiat quia.</div>
  </div>`

    setHTMLContent(aboutContent)
}