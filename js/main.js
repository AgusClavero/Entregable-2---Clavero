const productos= [
    {
        id: 0, 
        nombre: "televisor", 
        precio: 5000,
        cantidad: 0
    },
    {
        id: 1, 
        nombre: "lavarropas", 
        precio: 8000,
        cantidad: 0
    },
    {
        id: 2, 
        nombre: "microondas", 
        precio: 2000,
        cantidad: 0
    },
    {
        id: 3, 
        nombre: "secadora", 
        precio: 4000,
        cantidad: 0
    },
    {
        id: 4, 
        nombre: "cocina", 
        precio: 13000,
        cantidad: 0
    },
]

let carritoProductos = []
let catalogoProductos = document.getElementById("catalogo-productos")

function listaProductos(productosArray) {
    productosArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <p>$${producto.precio}</p>
                          <button class="agregarProducto" id="${producto.id}"> Agregar </button>`
        catalogoProductos.appendChild(card)
    })
    agregarAlCarrito(productos)
}

listaProductos(productos)

function agregarAlCarrito (arrayProductos) {
    addButton = document.querySelectorAll(".agregarProducto")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const idProducto = e.currentTarget.id
            const seleccionProducto = productos.find(producto => producto.id == idProducto)
            
            console.log(idProducto)

            const index = carritoProductos.findIndex((elemento) => elemento.id == idProducto)

              console.log(index)

              if (index !== -1) {
                    carritoProductos[index].cantidad += 1
                    
                    console.log("ID encontrado")
                   
               } else {
                    console.log("ID no encontrado")
                    productos[idProducto].cantidad += 1
                    carritoProductos.push(seleccionProducto)
                    
               }

            console.log(carritoProductos)
            localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos))
        }
        
    })
}