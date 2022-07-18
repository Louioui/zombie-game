import {width, height} from "../config.js"
class Zombie {
    speed = 1.1
    radius = 20
    health = 5
   
  
    constructor(player) {
      this.vector = {
        x: width + this.radius,
        y: random(-this.radius, height + this.radius)
      }
      this.rotate(player)
    }
  
    rotate(player) {
      let dy = player.vector.y - this.vector.y
      let dx = player.vector.x - this.vector.x
      this.angle = Math.atan2(dy, dx)
    }
  
    update(player, zombies) {
      if(this.health <= 0) {
        zombies = zombies.splice(zombies.indexOf(this), 1)
        return
      }
  
      this.rotate(player)
      this.vector.x += Math.cos(this.angle) * this.speed
      this.vector.y += Math.sin(this.angle) * this.speed
    }
}