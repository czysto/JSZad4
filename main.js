let size = 100;
let grow = true;

document.body.style.height = "10000px";
const div = document.createElement("div");
document.body.appendChild(div);

div.style.position = "fixed";
div.style.width = "100%";
div.style.left = 0;
div.style.top = 0;
div.style.backgroundColor = "green";
div.style.height = size + "px";

const changeHeight = function () {

    if (size > window.innerheight / 2) {
        grow = !grow;
        div.style.backgroundColor = "red";
    } else if (height <= 0) {
        grow = !grow;
        div.style.backgroundColor = "green";
    }

    if (grow) {
        size += 5;
    } else {
        size -= 5;
    }
    div.style.height = size + "px";
}
window.addEventListener("scroll", changeHeight);