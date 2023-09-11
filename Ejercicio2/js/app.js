class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.detalle = this.precio * this.cantidad;
    }
}

document.getElementById('productoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    const producto = new Producto(nombre, precio, cantidad);
    agregarProductoATabla(producto);
    actualizarTotalVenta();
    limpiarFormulario();
});

function agregarProductoATabla(producto) {
    const tablaProductos = document.getElementById('productosBody');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precio.toFixed(2)}</td>
        <td>${producto.cantidad}</td>
        <td>$${producto.detalle.toFixed(2)}</td>
    `;
    tablaProductos.appendChild(fila);
}

function actualizarTotalVenta() {
    const productos = document.querySelectorAll('#productosBody tr');
    let total = 0;
    productos.forEach(producto => {
        const detalle = parseFloat(producto.children[3].textContent.substring(1));
        total += detalle;
    });
    const totalVenta = document.getElementById('totalVenta');
    totalVenta.innerHTML = `Total: $${total.toFixed(2)}`;
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
}
