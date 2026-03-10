var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["empleado"] = 1] = "empleado";
    Role[Role["trabajador"] = 2] = "trabajador";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(id, name, age, rol, email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.rol = rol;
        this.email = email;
        User.userCount++;
    }
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setModificarEmail = function (nuevoEmail) {
        this.email = nuevoEmail;
    };
    User.prototype.getRole = function () {
        return this.rol;
    };
    User.userCount = 0;
    return User;
}());
var users = [];
var n1 = new User(12, "Osel", 30, Role.admin, "example@gmail.com");
users.push(n1);
function filtradoRoles(users, role) {
    return users.filter(function (user) { return user.getRole() === role; });
}
