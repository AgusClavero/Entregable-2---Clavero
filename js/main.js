const productos= [
    {
        id: 0, 
        nombre: "Televisor", 
        precio: 6000,
        cantidad: 0,
        imagen: "./img/smart-tv.jpg"
    },
    {
        id: 1, 
        nombre: "Lavarropas", 
        precio: 9000,
        cantidad: 0,
        imagen: "./img/lavarropas.jpg"
    },
    {
        id: 2, 
        nombre: "Microondas", 
        precio: 4000,
        cantidad: 0,
        imagen: "./img/microondas.png"
    },
    {
        id: 3, 
        nombre: "Secadora", 
        precio: 5000,
        cantidad: 0,
        imagen: "./img/secadora.jpg"
    },
    {
        id: 4, 
        nombre: "Cocina", 
        precio: 11000,
        cantidad: 0,
        imagen: "./img/cocina.png"
    },
]

let carritoProductos = []
let catalogoProductos = document.getElementById("catalogo-productos")

function listaProductos(productosArray) {
    productosArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3 class="h-producto">${producto.nombre}</h3>
                          <img src="${producto.imagen}">
                          <p class="p-producto">$${producto.precio}</p>
                          <button class="agregarProducto" id="${producto.id}"> Agregar </button>`
        catalogoProductos.appendChild(card)
    })
    agregarAlCarrito()
}

listaProductos(productos)

function agregarAlCarrito () {
    addButton = document.querySelectorAll(".agregarProducto")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const idProducto = e.currentTarget.id
            const seleccionProducto = productos.find(producto => producto.id == idProducto)

            const index = carritoProductos.findIndex((elemento) => elemento.id == idProducto)


              if (index !== -1) {
                    carritoProductos[index].cantidad += 1
                    
               } else {
                    productos[idProducto].cantidad += 1
                    carritoProductos.push(seleccionProducto)
                    
               }

            localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos))
        }
        
    })

}