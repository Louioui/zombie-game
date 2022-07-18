import { width, height, resizeConfig } from "../config"
 const resize = canvas => {
     reisizeHandler(canvas)
     document.body.addEventListener('resize', ()=>{
         reisizeHandler(canvas)
     })
 }

 export default resize;