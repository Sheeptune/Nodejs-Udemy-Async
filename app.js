// Here we are gonna make promises in parallel

console.log('Start')

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('p1')
    }, 1500)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('p2')
    }, 1500)
})

// We make a command to get both promises in parallel with all()
// and an array containing the promises results
// .all() is wainting for both reponses
// .race() get the faster one
Promise.all([p1, p2])
    .then(result => console.log(result))

console.log('End')



