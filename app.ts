
const person :{
    name:string
    age:number
    hobbies: string[]
    role:[number,string]
}= {
    name:'string',
    age:11,
    hobbies:['sports','cocies'],
    role:[1,'bro']
}
let favoriteActivities:string[]
favoriteActivities = ['sports']

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map)  !! dont work
}
console.log(person.age)
