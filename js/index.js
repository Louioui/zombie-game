import animate from "/js/libary/animate.js"
import pointer from "/js/libary/pointer.js"
import resize from "/js/libary/resize.js"
import { width, height } from "../config.js"

import Player from "/js/characters/player.js"
import Zombie from "/js/characters/zombie.js"
import Bullet from "/js/characters/bullet.js"

const canvas = document.getElementById("app-scene")
const ctx = canvas.getContext("2d")

resize(canvas)

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
    bullet.render(ctx)
  })

  zombies.forEach(zombie => {
    zombie.update(player, zombies)
    zombie.render(ctx, frame)
  })    

  player.update()
  player.render(ctx)

  if(frame % 400 == 0) {
    zombies.push(new Zombie(player))
  }
}

animate(update)