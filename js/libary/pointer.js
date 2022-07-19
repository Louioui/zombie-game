const pointer = (canvas, event) => {
    const rect = canvas.getBoundingClientRect() //method returns a DomRect object providing info about the size of an element & its positions relative to the viewport
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
  
    return {
      x, y
    }
  }
  
  export default pointer