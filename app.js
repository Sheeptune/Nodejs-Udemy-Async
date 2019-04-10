// Promises avoid getting overlapping system like with callback
// We use them to get a rest system (what happens next)

console.log('Start')

// Get member is now a promise so we can use a .then to represents the 'resolve'
getMember()
    .then(member => getArticles(member))
    // We get the new Promise of getArticles()
    // So .then = the 'resolve' of 'getArtciles(member)' ABOVE
    .then(articles => console.log(articles))
    // catch will manage all the promises
    . catch(err => console.log(err.message))

// getMember() will be executed once the anonymous function (callback) is executed
function getMember() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Member 1')
            resolve('Member 1')
        }, 1500)
    })
}

// Function getArticles takes 'member' into account
// It simulates a timeout and return an array with the function 'next'
// We call this function once getMember() is executed

function getArticles(member) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1500)
    })
}

console.log('End')



