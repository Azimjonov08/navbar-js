'use strict'

let modal = document.getElementById("modal");
let NavLink = document.querySelectorAll(".nav-link");
let btn = document.querySelectorAll(".btn")[0]
let btn1 = document.querySelectorAll(".btn")[1]
let btn2 = document.querySelectorAll(".btn")[2]


let btnn = document.getElementById("btnn");

let openmodal = document.getElementById("open-modal");

btn.addEventListener('click', function () {
  openmodal.style.display = 'flex'
})

btn1.addEventListener('click', function () {
    openmodal.style.display = 'flex'
  })

  btn2.addEventListener('click', function () {
    openmodal.style.display = 'flex'
  })

openmodal.addEventListener('click', function (evt) {
  if (evt.target.matches('#open-modal') || evt.target.matches('#btnn'))
  openmodal.style.display = 'none'
})

NavLink.forEach(function(element){
    element.addEventListener("click",function(){
        NavLink.forEach(function(item){
            item.classList.remove("active");
        })
        element.classList.add("active");
    })
})





