const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

let newArr = []


for (var result of toys) {
    if (result.name.includes('gato')) {
        toys.splice(result, 0)
    } else {
        newArr.push(result)
    }
}

console.log(newArr)