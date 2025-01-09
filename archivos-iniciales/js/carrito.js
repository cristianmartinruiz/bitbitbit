const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito')) ;

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-accciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

if (productosEnCarrito) {
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class= "carrito-producto-imagen" src="./img/abrigos/01.jpg" alt="">
            <div class="carrito-producto-titulo"> 
                <small>Titulo</small>
                <h3>Abrigo01</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>1</p>
            </div>
            <div class="carrito-producto-precio"></div>
                <small>Precio</small>
                <p>1000</p>
            </div>
            <div class="carrito-producto-subtotal"></div>
                <small>Subtotal</small>
                <p>1000</p>
            </div>     
            <button class="carrito-producto-eliminar"><i class="bi bi-trash-fill"></i></button>
        `                

    })

} else {


}