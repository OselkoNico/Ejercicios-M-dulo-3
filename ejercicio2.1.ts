type UserID = string | number;

enum Role {
    admin,
    empleado,
    trabajador
}

interface IUser {
    id: UserID,
    name: string,
    age: number
}

class User implements IUser {
    public id: UserID
    public name: string
    public age: number
    protected rol: Role
    private email: string
    static userCount: number = 0
   constructor(id: UserID, name: string, age: number, rol: Role, email: string){
    this.id = id
    this.name = name  
    this.age = age
    this.rol = rol
    this.email = email
    User.userCount++
   }
   
   getEmail(){
    return this.email
   }
   setModificarEmail(nuevoEmail: string){
    this.email = nuevoEmail
   }
   getRole(){
    return this.rol
   }
}

const users: User[] = [];

const n1 = new User(12, "Osel", 30, Role.admin, "example@gmail.com");

users.push(n1);

function filtradoRoles(users: User[], role: Role): User[] {
    return users.filter((user)=>user.getRole() === role)
}