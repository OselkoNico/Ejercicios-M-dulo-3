class Caja<T> {
    contenido: T;
    constructor(contenido: T){
        this.contenido = contenido;
    }
    obtenerContenido(){
        return this.contenido
    }
}