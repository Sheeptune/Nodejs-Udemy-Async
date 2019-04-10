console.log('Start')

// This variable should be taken as a promise
let p = new Promise((resolve, reject)=> {

    setTimeout(()=>{
        resolve('All good')
        //reject(new Error('Error during ...'))
    }, 1500)
})

// We need to create resolve() and reject() with .then()
// First resolve
p.then((message)=>{
    console.log(message)
    // Then reject
}).catch((err)=>{
    console.log(err.message)
})

console.log('End')


// By convention we use 'next' when use callbacks
// getMember() will be executed once the anonymous function (callback) is executed
function getMember(next) {
    setTimeout(()=>{
        next('Member 1')
    }, 1500)
}

// Function getArticles takes 'member' into account
// It simulates a timeout and return an array with the function 'next'
// We call this function once getMember() is executed

function getArticles(member, next) {
    setTimeout(()=>{
        next([1, 2, 3])
    }, 1500)
}

// Lees promesses évite le systeme d'embrication pour avoir plutot un systeme de suite