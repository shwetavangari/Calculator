
var screen=document.querySelector(".display")
var buttons=document.querySelectorAll(".button")

screen.value=""
buttons.forEach(function(btn){
    btn.addEventListener("click",function(){
       screen.value=screen.value+btn.getAttribute("data")
    })
})

function solve(){
    var expr=screen.value
    var result=eval(expr)
    screen.value=result
}
function clearData(){
    screen.value=""
}