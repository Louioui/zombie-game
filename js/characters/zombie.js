import {width, height} from "../config.js"
import {random} from "../libary/utils"
class Zombie {
    speed = 1.1
    radius = 20
    health = 5
    custom = "dead"
   
  
    constructor(player) {
      this.vector = {
        x: width + this.radius,
        y: random(-this.radius, height + this.radius)
      }
      this.rotate(player)
    }
  
    rotate(player) {
      let rY = player.vector.y - this.vector.y
      let rX = player.vector.x - this.vector.x
      this.angle = Math.atan2(rY, rX)
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

    make(char, frame) {
        char.save()
    
        let tX = this.vector.x 
        let tY = this.vector.y 
        char.translate(tX, tY)
        char.rotate(this.angle)
        char.translate(-tX, -tY)
    
        char.beginPath()
        char.fillStyle = "#00cc44"
        char.arc(this.vector.x, this.vector.y, this.radius, 0, Math.PI * 2)
        char.stroke()
        char.fill()
    
        // Hands
        char.beginPath()
        char.strokeStyle = "#00cc44"
        char.lineCap = "round"
        char.lineWidth = 4
    
        // Right Hand
        if(frame % 50 == 0) {
          this.costume = this.costume == "dead" ? "open" : "dead"
        }
    
        if(this.costume == "dead") {
          char.moveTo(this.vector.x + 5, this.vector.y + this.radius - 2) 
          char.lineTo(this.vector.x + this.radius + 15, this.vector.y + this.radius - 5)
          char.stroke()
    
          // Left Hand
          char.moveTo(this.vector.x + 5, this.vector.y - this.radius + 2)
          char.lineTo(this.vector.x + this.radius + 15, this.vector.y - this.radius + 5)
          char.stroke()
         }
           else {
          char.moveTo(this.vector.x + 5, this.vector.y + this.radius - 2) 
          char.lineTo(this.vector.x + this.radius, this.vector.y + 10)
          char.stroke()
    
        // Left Hand
          char.moveTo(this.vector.x + 5, this.vector.y - this.radius + 2)
          char.lineTo(this.vector.x + this.radius, this.vector.y - 10)
          char.stroke()
       }
        char.restore()
     }
}
    
    
    export default Zombie

