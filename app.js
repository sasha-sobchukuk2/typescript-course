var person = {
    name: 'string',
    age: 11,
    hobbies: ['sports', 'cocies']
};
var favoriteActivities;
favoriteActivities = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map)  !! dont work
}
console.log(person.age);
