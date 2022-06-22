var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'string',
    age: 11,
    hobbies: ['sports', 'cocies'],
    roleTurple: [1, 'bro'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map)  !! dont work
}
if (person.role === Role.ADMIN) {
    console.log(' role');
}
