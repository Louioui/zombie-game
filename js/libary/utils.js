const random = (min, max) => {
    return (Math.random() * (max - min)) + min
  }
  //pythagorean theorem 
  const distance = (x1, y1, x2, y2) => {
      let xx = Math.pow((x2 - x1), 2),
          yy = Math.pow((y2 - y1), 2)
      return Math.sqrt(xx + yy)
  }
  
  const map = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
  
  export {
    map,
    random,
    distance
  }