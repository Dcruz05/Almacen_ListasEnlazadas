const almacen = new Inventario();


//Boton para agregar Producto
const btnAgregar =document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",(e)=>{
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    if (codigo=="") {
        document.getElementById("actividades").innerHTML += `No se agrego el producto, falta el codigo <br>`
    }else{
        const producto = new Producto(parseInt(codigo), nombre, cantidad, precio);
        respuesta = almacen.agregar(producto)
        if(respuesta==true){
            document.getElementById("actividades").innerHTML += `Se agrego el producto<br>`
        }
        else if(respuesta==false){
            document.getElementById("actividades").innerHTML +=`No se puede agregar un producto con codigo repetido<br>`;
        }
    }


    e.preventDefault();
})

//Boton para mostrar listado normal de productos
const btnMostrar = document.getElementById("btnMostrar")
btnMostrar.addEventListener("click", (e) => {
    document.getElementById("listado").innerHTML =`${almacen.listado()}`
    e.preventDefault();
});

//Boton para mostrar listado invertido de productos
const btnMostrarInvertido = document.getElementById("btnMostrarInvertido")
btnMostrarInvertido.addEventListener("click", (e) => {
    document.getElementById("listado").innerHTML =`${almacen.listadoInverso()}`
    e.preventDefault();
});

//Boton para eliminar un registro por codigo
const btnEliminar = document.getElementById("btneliminar")
btnEliminar.addEventListener("click", (e) => {
    if(almacen.eliminar(document.getElementById("dltCodigo").value)==true){
        document.getElementById("actividades").innerHTML +=`Producto eliminado<br>`
    }else document.getElementById("actividades").innerHTML +=`El producto que desea eliminar no existe<br>`
});

const btnBuscar = document.getElementById("btnBuscar")
btnBuscar.addEventListener("click", (e) => {
    const producto = almacen.buscar(document.getElementById("schCodigo").value)
    const res = almacen.mostrarBusqueda(producto)
    if (res!=null)
        document.getElementById("listado").innerHTML = `${res}`
    else
        document.getElementById("actividades").innerHTML +=`El codigo que desea buscar no existe<br>`
})

