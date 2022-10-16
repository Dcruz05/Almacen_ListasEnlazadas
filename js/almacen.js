class Almacen{
    constructor(){
        this.primero=null;
    }
    agregar(producto){
        if(this.primero==null){
            this.primero=producto
        }else{
            this.agregarSiguiente(producto,this.primero);
        }
    }
    agregarSiguiente(producto,nodoX){
        if(nodoX.siguiente==null){
            nodoX.siguiente =producto
        }else{
            this.agregarSiguiente(producto,nodoX.siguiente)
        }
    }
    buscar(codigo){
        let aux=this.primero
        while(aux!=null){
            if(aux.codigo==codigo){
                return aux
            }else{
                aux=aux.siguiente;
            }
        }
        return null;
    }
    eliminar(codigo){
        let aux=this.primero
        if(aux.codigo==codigo){
            this.primero = aux.siguiente
            return true;
        }else{
            let siguiente = null;
            while(aux.siguiente!=null){
                siguiente= aux.siguiente;
                if(siguiente.codigo==codigo){
                    aux.siguiente=aux.siguiente.siguiente
                    return true;
                }else{
                    aux=aux.siguiente;
                }
            }
            return false;
        }
    }
    listar(){
        let lista="";
        let aux=this.primero
        while(aux!=null){
            lista+=`${aux.info()}`
            aux=aux.siguiente;
        }
        return lista;
    }
    listarInverso() {
        let lista = ""
        lista = this.recorrerInverso(this.primero)
        return lista
    }
    recorrerInverso(nodo){
        if(nodo.siguiente==null){
          return `${nodo.info()}`
        }
        return `${this.recorrerInverso(nodo.siguiente)}`+`${nodo.info()}`
    }
}