console.log('Start')

// (After 'end') We want to return the member first and then the array

// USING A FIRST CALLBACK on getMember() to display 'Member 1' 
getMember((member) => {
    console.log(member)
    // USING A SECOND CALLBACK on getArticles() to display the array
    // We set articles as a callback parameter 
    getArticles(member, (articles)=>{
        console.log(articles)
    })
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