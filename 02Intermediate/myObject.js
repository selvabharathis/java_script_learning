
let myYoutubeVideo = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'selvabharathi',
    videoDescription: 'this is a video description and a long one'
} 

// console.log(myYoutubeVideo)

// console.log(`hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)

// myYoutubeVideo.title = 'Loops in js'// change the main object too.

let changeVideoLength = function(myObject){
    return{
        formatOne: `Time of this video is: ${myObject.videoLength}`,
        formatTwo: `Time of this video is: ${myObject.videoLength}`
    }
}

let adOne = changeVideoLength(myYoutubeVideo)
console.log(adOne.formatOne)
