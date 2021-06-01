// var student = {
//     fname: "femi",
//     lname: "joseph",
//     age:21,
//     address: "jos",
//     weight: 6.5,
//     fullname: function() {
//         return this.fname + " " + this.lname
//     }

// }

// console.log(`The student name is ${student.fname} and the age is ${student.age}`)
 
// let fullname = student.fullname()
// console.log(fullname)
// console.log(Object.values(student))
// console.log(student)


// var student = {
//     name: {
//         surname: "ismailawa",
//         midname: "s",
//         lastname: "aliyu"
//     },

//     address: {
//         no: 21,
//         street: "laranto",
//         city: "jos",
//         state: "plateau"
//     },

//     age: 40,

// }


// console.log(student)

var students = [
    {
        id: 1,
        name: "abdullahi",
        age: 23
    },
    {
        id: 2,
        name: "femi",
        age: 25
    }
]

console.log(students.filter((s)=> s.id == 1))

for(let s of students){
    console.log(s.name)
}

for(let i=0; i < students.length; i++){
    console.log(students[i].name)
}

console.log(Object.keys(students))



