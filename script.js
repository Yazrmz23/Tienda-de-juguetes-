function comprar(producto){

let lista = document.getElementById("carrito")

let item = document.createElement("li")

item.textContent = producto

lista.appendChild(item)

alert("Producto agregado al carrito")
}
