class Inventario{
    constructor(){
        this.productos=new Array();
    }

    agregar(producto){
        let i = this.productos.length
        if (i==0){
            this.productos[i]=producto
            return true
        }
        let buscar = this.buscar(producto.codigo)
        if(buscar == null ){
            while (this.productos[i-1]!=null&&producto.codigo < this.productos[i-1].codigo){
                this.productos[i]= this.productos[i-1];
                i--;
            }
            this.productos[i]=producto;
            return true
        }else{
            return false;
        }
    }

    eliminar(codigo){
        if(this.buscar(codigo)==null){
            return false;
        }
        else{
            for(let i=0;i<this.productos.length;i++){
                if(codigo==this.productos[i].codigo){
                    for(let j=i;j<this.productos.length-1;j++){
                        this.productos[j]=this.productos[j+1];
                    }
                }
            }
            this.productos.pop()
            return true;
        }
    }

    buscar(codigo){
        let inicio = 0;
        let fin = (this.productos.length) - 1;   
        let resultado = null;
        let encontrado = false;
        let mitad;
     
        while ((encontrado === false) && (inicio <= fin)) {
            mitad = Math.floor((inicio + fin)/2);
            if (this.productos[mitad].codigo == codigo) {
                encontrado = true;
                resultado = this.productos[mitad];
            } else if (this.productos[mitad].codigo > codigo) {
                fin = mitad - 1;
            } else {
                inicio = mitad + 1;
            }
        }
        return resultado;
    }

    mostrarBusqueda(resultado){
        if(resultado!=null){
            return `${resultado.infoHtml()}`
        }else{
            return null;
        }
    }

    listado(){
        let lista = ""
        if(this.productos.length>0){
            for(let i=0;i<this.productos.length;i++){
                lista += this.productos[i].infoHtml();
            }
        }else{
            lista = "<p>No hay productos registrados</p>"
        }
        
        return lista
    }

    listadoInverso(){
        let lista = ""
        if(this.productos.length>0){
            for(let i=this.productos.length-1;i>=0;i--){
                lista += this.productos[i].infoHtml();
            }
        }else{
            lista = "<p>No hay productos registrados</p>"
        }
        return lista
    }
}