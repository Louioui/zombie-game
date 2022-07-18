import resize from "./libary/resize"
import { width, height } from "./config"
import Player from "../characters/player"

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
 
