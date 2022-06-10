import {navbar} from "../components/navbar.js";


import '../style/style.css';

import axios from 'axios'

document.getElementById("navbar").innerHTML=navbar()
async function ll()
{

let value=document.getElementById("query").value
//let data=await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
// let data=await axios.get('https://fakestoreapi.com/products/category/jewelery')
let data =await axios.get(`https://www.omdbapi.com/?apikey=9b3377fb&s=${value}`)
//console.log(data)
append(data.data.Search)
}
document.getElementById("submit").addEventListener("click",ll)

let displayDiv=document.getElementById("display")

 let  append=(data)=>{
      data.forEach(function(el){
        console.log(el)

        let box=document.createElement("div")

        let imag=document.createElement("img")
        imag.src=el.Poster

        let name=document.createElement("h2")
        name.innerText=el.Title

        box.append(imag,name)

        displayDiv.append(box)
      })
  }
