
const person = {
    name:'string',
    age:11,
    hobbies:['sports','cocies']
}
let favoriteActivities:string[]
favoriteActivities = ['sports']

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map)  !! dont work
}
console.log(person.age)
