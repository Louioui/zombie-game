import resize from "./libary/resize"
import { width, height } from "./config"
import Player from "../characters/player"
import Zombie from "./characters/zombie"
import Bullet from "./characters/bullet"

const canvas = document.getElementById("zombieGame")
const container = canvas.getContext("2d")
 resize(canvas);

 const player = new Player()
 const bullets = []
 const zombies = []

 document.body.addEventListener("click", () => {
    bullets.push(
      new Bullet(player.vector.x, player.vector.y, player.angle)
    )
  })

 document.body.addEventListener("mousemove", (e) => {
   let mouse = pointer(canvas, e)
   player.rotate(mouse)
 })

 const update = (frame) => {
    ctx.clearRect(0, 0, width, height)
  
    bullets.forEach(bullet => {
      bullet.update(bullets, zombies)
      bullet.render(char)
    })
  
    zombies.forEach(zombie => {
      zombie.update(player, zombies)
      zombie.render(char, frame)
    })    
  
    player.update()
    player.render(char)
  
    if(frame % 400 == 0) {
      zombies.push(new Zombie(player))
    }
  }
  
  animate(update)
