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
    },
    {
        id: 6,
        name: "sunday",
        age: 29
    },
    {
        id: 3,
        name: "shuaibu",
        age: 19
    },
    {
        id: 4,
        name: "kunle",
        age: 28
    },
    {
        id: 5,
        name: "david",
        age: 28
    }
]

let maxAge = 0

students.forEach((student)=>{
    if(student.age > maxAge){
        maxAge = student.age
    }
})

let oldestStudent = students.filter((student)=> student.age == maxAge)
console.log(oldestStudent)

let studentName = students.map((student)=>{
    const { name } = student;
    return { name }
})

const avgAge = students.map((student)=> student.age).reduce((prev,next)=> prev + next)/students.length


console.log(avgAge)

// console.log(students.filter((s)=> s.id == 1))

// for(let s of students){
//     console.log(s.name)
// }

// for(let i=0; i < students.length; i++){
//     console.log(students[i].name)
// }

// console.log(Object.keys(students))



