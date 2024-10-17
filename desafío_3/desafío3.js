let producto = "videojuegos"
let precioUnitario = "100"
let cantidad;

cantidad = prompt ("¿cuantos " + producto + " desea comprar?")

let preciofinal = precioUnitario * cantidad;

if(cantidad >= 5) {
    preciofinal = preciofinal * 0.90
} 

alert ("el costo total de su compra es de $" + preciofinal)