console.log('Start')

/*
getMember()
    .then(member => getArticles(member))
    .then(articles => console.log(articles))
}) */

// Call getMembers(), wait for resolve to return a result, then put it back into the member
// As if our code was synchroneous, simultaneous (but in reality it is not)
async function viewArticles(){
    // Await & Asyn require variables
    // Await is looking for the result returned by resolve, here [1, 2, 3]
    let member = await getMember()
    let articles = await getArticles(member)
    console.log(articles)
}

viewArticles()

function getMember() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Member 1')
        }, 1500)
    })
}

// Function getArticles takes 'member' into account
// It simulates a timeout and return an array with the function 'next'

function getArticles(member) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1500)
    })
}


console.log('End')
