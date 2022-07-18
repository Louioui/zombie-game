import resize from "./libary/resize"
import { width, height } from "./config"
import Player from "../characters/player"

const canvas = document.getElementById("zombieGame")
const container = canvas.getContext("2d")
 resize(canvas);

 const player = new Player()
 const bullets = []
 const zombies = []

 document.body.addEventListener("click", () =>{
     //code block
 })

 document.body.addEventListener("mousemove", (e) => {
     // code block
 })
