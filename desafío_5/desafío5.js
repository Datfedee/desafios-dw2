const productos = ["re4","darksouls","rust","cs2","god of war","call of duty"]

for(let i = 0; i < productos.length; i++){
    console.log("juego " + ( i + 1 ) + " : " + productos[i])
}

let venta = productos.pop()

console.log("se vendió: " + venta)

for(let i = 0; i < productos.length; i++){
    console.log("juego " + ( i + 1 ) + " : " + productos[i])
}