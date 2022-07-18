import key from "../libary/input"


class Player {
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