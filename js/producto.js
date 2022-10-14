class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    info(){
        return `${this.codigo} - ${this.nombre} $${this.costo}`
    }
    infoHtml(){
        return `<div><h4>${this.codigo} - ${this.nombre}</h4>
        <p>Cantidad : ${this.cantidad} - Precio $${this.costo}</p></div>`;
    }
}