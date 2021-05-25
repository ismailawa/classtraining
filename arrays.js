const array = [1, 2.3, 'hello', true]
array.push(100)
array.pop()
const newarray = array.slice(1,)

console.log(newarray)

const numbers = [10, 20, 30, 40, 50] 
function add() {}
const changedNumbers = numbers.map(function (item){return item/2 })

console.log(changedNumbers)

const ages = [25, 30, 45, 60,75]

const newAges = ages.map((age, index)=> { 
    if(index == 1) {
        return age/2
    }else {
        return age
    }
})


const totalAges = ages.reduce((prev, next) => {
    console.log(prev,next)
    return prev + next
})

console.log(newAges)
console.log(totalAges)