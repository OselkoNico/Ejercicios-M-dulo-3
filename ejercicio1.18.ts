interface Usuario {
    id: number,
    nombre: string,
    email: string
}

class GestorUsuarios {
    usuarios: Usuario[];
    constructor(usuarios: Usuario[]){
        this.usuarios = usuarios
    }
    agregarUsuario(usuario: Usuario){
        return this.usuarios.push(usuario);
    }
    listarUsuarios(){
        return this.usuarios;
    }
    buscarUsuarioPorId(id: number){
       return this.usuarios.find(usuario => usuario.id === id)
    }
}


// Corrección de la clase para que sea más limpio:

class GestorUsuarios {
    usuarios: Usuario[] = []; // inicializar vacío por defecto

    agregarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    buscarUsuarioPorId(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.id === id);
    }
}