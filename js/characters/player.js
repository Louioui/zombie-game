import key from "../libary/input"


class Player {
     //position of point
     vector={  
        x: width/2,
        y: height/2
    }

    speed= 2
    radius = 20
    angle = -Math.PI/ 2 

    rotate({x,y}){
        let rY = y -this.vector.y
        let rX = x -this.vector.x
        this.angle = Math.atan2(rY,rX)
        // getting the angle from the player to the cursor in radius 
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
}