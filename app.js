console.log('Start')

// Here we are testing async -> 'Timeout' is rendered after 'End'
// USING CALLBACKS to display 'Member 1'
getMember((member) => {
    console.log(member)
})

console.log('End')

// By convention we use 'next' when use callbacks
// 'Member 1' is rendered once the setTimeout() ended
function getMember(next) {
    setTimeout(()=>{
        next('Member 1')
    }, 1500)
}



