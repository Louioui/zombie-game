import key from "../libary/input"
import {width, height} from "../config.js"

class Player {
     //position of point
     vector={  
        x: width/2,
        y: height/2
    }

    speed= 2
    radius = 20
    angle = -Math.PI/ 2 
     //destructure the pointer coords
    rotate({x,y}){
        let rY = y -this.vector.y
        let rX = x -this.vector.x 
        // getting the angle from the player to the cursor in radius 
        this.angle = Math.atan2(rY,rX)
       
    }
    move() {
      if(key("w") && this.vector.y - this.speed - this.radius > 0) {
        this.vector.y -= this.speed
      }
      if(key("s") && this.vector.y + this.speed + this.radius < height) {
        this.vector.y += this.speed
      }
      if(key("a") && this.vector.x - this.speed - this.radius > 0) {
        this.vector.x -= this.speed
      }
      if(key("d") && this.vector.x + this.speed + this.radius < width) {
        this.vector.x += this.speed
      }
    }
    update() {
         this.move()
    }
    contribute(char) {
        char.save()
    
        let tX = this.vector.x 
        let tY = this.vector.y 
        char.translate(tX, tY)
        char.rotate(this.angle)
        char.translate(-tX, -tY)
    
        // Body
        char.beginPath()
        char.fillStyle = "#ffe0bd"
        char.arc(this.vector.x, this.vector.y, this.radius, 0, Math.PI * 2)
        char.fill()
    
        // Gun    
        char.beginPath()
        char.fillStyle = "#000"
        char.rect(this.vector.x + this.radius + 15, this.vector.y - 5, 25, 10)
        char.fill()
    
        // Hands
        char.beginPath()
        char.strokeStyle = "#ffe0bd"
        char.lineCap = "round"
        char.lineWidth = 4
    
        // Right Hand
        char.moveTo(this.vector.x + 5, this.vector.y + this.radius - 2) 
        char.lineTo(this.vector.x + this.radius + 15, this.vector.y + 5)
        char.stroke()
    
        // Left Hand
        char.moveTo(this.vector.x + 5, this.vector.y - this.radius + 2)
        char.lineTo(this.vector.x + this.radius + 15, this.vector.y - 5)
        char.stroke()

        char.restore()
      }
      
}
export default Player