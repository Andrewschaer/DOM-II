// Your code goes here

// EVENT 1 SIGN UP LINKS MOUSEOVER EVENTS
const signUpButtons = document.querySelectorAll('div.btn');

signUpButtons[0].addEventListener('mouseover', function(event){
    console.log(event.type, event.timeStamp, 'User hovered over Fun In The Sun sign up! Could be a good lead!')
})
signUpButtons[1].addEventListener('mouseover', function(event){
    console.log(event.type, event.timeStamp, 'User hovered over Mountain Excursion sign up! Could be a good lead!')
})
signUpButtons[2].addEventListener('mouseover', function(event){
    console.log(event.type, event.timeStamp, 'User hovered over Island Getaway sign up! Could be a good lead!')
})

// EVENT 2 - USER ESCAPE BUTTON PUSH EVENT
function escKey(event){
    if (event.keyCode === 27){
        console.log(event.type, event.timeStamp, 'User pressed esc and expected an undefined functionality')
    }
}

document.addEventListener('keydown', escKey)

// EVENT 3 - MOUSE WHEEL USAGE EVENT
function mouseWheel(event){
    console.log(event.type, event.timeStamp, 'User used mouse wheel')
}

document.addEventListener('wheel', mouseWheel)

// EVENT 4 - WINDOW RESIZE EVENT
function windowResize(event){
    console.log(event.type, event.timeStamp, `User resized window to width: ${window.outerWidth}, height ${window.outerHeight}`)
}
window.addEventListener('resize', windowResize)


// EVENT 5 - DOUBLE CLICK EVENT
const logoHeading = document.querySelector('.logo-heading')

function headingGold(event){
    logoHeading.style.color = 'gold';
    console.log(event.type, event.timeStamp, 'User double-clicked on Fun Bus Logo Heading')
}

logoHeading.addEventListener('dblclick', headingGold)

// EVENT 6 - COPY EVENT
function copyEvent(event){
    console.log(event.type, event.timeStamp, 'User copied some text')
}

document.addEventListener('copy', copyEvent)

// EVENT 7 - CUT EVENT
function cutEvent(event){
    console.log(event.type, event.timeStamp, 'User cut some text')
}

document.addEventListener('cut', cutEvent)

// EVENT 8 - PASTE EVENT

function pasteEvent(event){
    console.log(event.type, event.timeStamp, 'User tried to paste some text')
}

document.addEventListener('paste', pasteEvent)

// EVENT 9 - FULLSCREEN EVENT

function fullScreen(event){
    console.log(event.type, event.timeStamp, 'User is adapting window full-screen size')
}

document.addEventListener('fullscreenchange', fullScreen)

// EVENT 10 - LOAD EVENT
window.addEventListener('load', (event) => {
    console.log((event.type, event.timeStamp, 'DOM has Loaded All Content'))
})




