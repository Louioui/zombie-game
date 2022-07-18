import { width, height, resizeConfig } from "../config"
 const resize = canvas => {
     reisizeHandler(canvas)
     document.body.addEventListener('resize', ()=>{
         resizeHandler(canvas)
     })
 }
const resizeHandler = (canvas)=>{
    Object.assign(canvas, {
        width,
        height
    })
}
 export default resize;