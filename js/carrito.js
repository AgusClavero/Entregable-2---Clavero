let sectionCarrito = document.getElementById("section-carrito")
let mostrarTotal = document.getElementById("mostrar-total")

const carritoStorage = JSON.parse(localStorage.getItem("carritoProductos")) || []

function listaCarrito (carritoItems) {
    carritoItems.forEach (producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3 class="h-producto">${producto.nombre}</h3>
                          <p class="p-producto">$${producto.precio}</p>
                          <p class="p-unidades">Unidades:${producto.cantidad}</p>
                          <button class="restarProducto" id="${producto.id}"> - </button>
                          <button class="sumarProducto" id="${producto.id}"> + </button>`
        sectionCarrito.appendChild(cart)
    })

}

    listaCarrito(carritoStorage)


function sumarProducto() {
    addButton = document.querySelectorAll(".sumarProducto")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const idProducto = e.currentTarget.id
            const index = carritoStorage.findIndex((item) => item.id == idProducto)

            if(carritoStorage[index].cantidad > 0) { 

                carritoStorage[index].cantidad += 1
                localStorage.setItem("carritoProductos", JSON.stringify(carritoStorage))
            }

            localStorage.setItem("carritoProductos", JSON.stringify(carritoStorage))
        }
    })
}

function restarProducto() {
    addButton = document.querySelectorAll(".restarProducto")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const idProducto = e.currentTarget.id
            const index = carritoStorage.findIndex((item) => item.id == idProducto)

            if(carritoStorage[index].cantidad == 1){
                carritoStorage.splice(index,1)
                
            }else {
                carritoStorage[index].cantidad -=1
                localStorage.setItem("carritoProductos", JSON.stringify(carritoStorage))
            }

            localStorage.setItem("carritoProductos", JSON.stringify(carritoStorage))
        }
        
    })
}

function calculoTotal(carrito) {
    const totalCantidad = carrito.reduce((acumulador, producto ) => acumulador + producto.cantidad, 0)

    const totalPrecio = carrito.reduce((acumulador, producto) => acumulador + producto.precio*producto.cantidad, 0)

    return {totalCantidad, totalPrecio}

}
const {totalCantidad, totalPrecio} = calculoTotal(carritoStorage)


function carritoTotal () {
    const cart = document.createElement("div")
    cart.innerHTML = `<h3 class="h-total">TOTAL: $${totalPrecio}</h3>`
    mostrarTotal.appendChild(cart)
}

sumarProducto(carritoStorage)
restarProducto(carritoStorage)
calculoTotal(carritoStorage)
carritoTotal()
