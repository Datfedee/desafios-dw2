function sumarcompras(precioproducto,cantidadcomprada){
    let preciofinal = precioproducto * cantidadcomprada
    return preciofinal
}

let producto = "muebles";
let precioproducto = 200;
let cantidadcomprada = prompt ("¿cuantos " + producto + " desea comprar? el precio es de $" + precioproducto)
let preciofinal = sumarcompras (precioproducto,cantidadcomprada)

console.log(preciofinal)

alert ("el total de su compra es de $" + preciofinal)