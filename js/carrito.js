let sectionCarrito = document.getElementById("section-carrito")
let mostrarTotal = document.getElementById("mostrar-total")

let carritoStorage = localStorage.getItem("carritoProductos") 
carritoStorage = JSON.parse(carritoStorage) || []

function listaCarrito (carritoItems) {
    carritoItems.forEach (producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>${producto.nombre}</h3>
                          <p>${producto.precio}</p>
                          <p>Unidades:${producto.cantidad}</p>
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
            const seleccionProducto = carritoStorage.find((producto) => producto.id == idProducto)

            if(carritoStorage[idProducto].cantidad === 1){
                carritoStorage.splice(seleccionProducto,1)
            }else { 
                carritoStorage[idProducto].cantidad--
                localStorage.setItem("carritoProductos", JSON.stringify(carritoStorage))
            }
            console.log(carritoStorage)

            localStorage.setItem("carritoProductos", JSON.stringify(carritoStorage))
        }
        
    })
}

function carritoTotal (carritoItems) {
    carritoItems.forEach (producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>TOTAL: $${producto.precio * producto.cantidad}</h3>`
                          
        mostrarTotal.appendChild(cart)
    })
 
}

sumarProducto(carritoStorage)
restarProducto(carritoStorage)
carritoTotal(carritoStorage)