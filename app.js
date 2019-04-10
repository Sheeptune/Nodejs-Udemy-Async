console.log('Start')

// Here we are testing async -> 'Timeout' is rendered after 'End'

getMember()
console.log('End')

function getMember(){
    setTimeout(()=>{
        console.log('Member 1')
    }, 1500)
}

