let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

document.getElementById("subtrair").addEventListener("click", decrement);
document.getElementById("adicionar").addEventListener("click", increment);

function cor(obj,cor) {
    obj.style.backgroundColor=cor;
}
function cor1(obj1,cor1) {
    obj1.style.backgroundColor=cor1;
}

function addEventos () {
var obj = document.getElementById("subtrair")
obj.addEventListener("mouseover", function(event){
    cor(obj, "#fff")
})
obj.addEventListener("mouseout", function(event){
    cor(obj, "rgb(241, 214, 214)")
})

var obj1 = document.getElementById("adicionar")

obj1.addEventListener("mouseover", function(event){
    cor1(obj1, "#fff")
})
obj1.addEventListener("mouseout", function(event){
    cor1(obj1, "rgb(241, 214, 214)")
})


}
window.addEventListener("load", addEventos)

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (count >= 0) {
        CURRENT_NUMBER.style.color = "black"
    }

}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;

    if (count < 0) {
        CURRENT_NUMBER.style.color = "red"
    }
}

function test() {
	kdowkdpo;
}

