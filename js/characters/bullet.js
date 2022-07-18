class Bullet {
    radius = 4
    speed = 10
  
    constructor(x, y, angle) {
      this.angle = {
        x: Math.cos(angle),
        y: Math.sin(angle)
      }
      this.vector = {
        x: x + this.angle.x * 40, 
        y: y + this.angle.y * 40
      }
    }
    
    boundary() {
      return (this.vector.x > width + this.radius ||
              this.vector.y > height + this.radius ||
              this.vector.x < 0 - this.radius ||
              this.vector.y < 0 - this.radius)
    }
}
export default Bullet