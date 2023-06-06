// const numbers = [7, 2, 4, 6, 5, 1, 3];
// debugger;
// numbers.sort((a, b) => a - b);
// console.log(numbers);



const people = [
    {id: 5, name: 'Angelica', age: 18},
    {id: 81, name: 'Thales', age: 19},
    {id: 47, name: 'Ana Carolina', age: 18},
    {id: 87, name: 'Felipe', age: 18},
    {id: 9, name: 'Gabriel', age: 20},
    {id: 73, name: 'Aline', age: 19}
]

const agesFrequency = people.reduce((accumulator, { age }) => {
    

    accumulator[age] = accumulator[age] + 1 || 1

    return accumulator
}, {})

console.log(agesFrequency)

const myPropertyName = 'c'

const myObject = {
  a: 5,
  b: 10,
  [myPropertyName]: 15
} 

console.log(myObject['b'])

