const uploader = document.querySelector('.uploader');

uploader.addEventListener("dragover",e => {
    e.preventDefault();
    changeStyle(e.srcElement, "#5558");
})

const changeStyle = (element, color) => {
    element.style.backgroundColor = color;
    element.style.border = `1px lineal ${color}`;
}

uploader.addEventListener("dragleave",e => {
    e.preventDefault();
    changeStyle(e.srcElement, "#4447");
})