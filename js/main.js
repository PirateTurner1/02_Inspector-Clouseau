/* writing into the header of the DOM  */
document.querySelector('header > h1').innerText = "inspector Clouseau"
document.querySelector('header > h2').innerText = "This iez Chef Inspecteor Clouseau speaking on de pheaun"

/*writing into the body of the DOM */
function reDisplay() {
let windowSizes = ` The windows size is ${window.innerWidth} pixels wide and by ${window.innerHeight} pixels tall.`
let offset = `The window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`

let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`

var txt2 = 'Document Title is ' + document.title + "<br>";
    txt2 += 'this document was last updated on ' + document.lastModified + "<br>";
    document.getElementById("myDocument").innerHTML = txt2;
}
reDisplay()
