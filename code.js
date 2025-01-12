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

const uploadFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load",e => {
        let url = URL.createObjectURL(file);
        let img = document.createElement("IMG");
        img.setAttribute("src", url);
        document.querySelector(".photo_container").appendChild(img);
    })
}

uploader.addEventListener("drop",e => {
    e.preventDefault();
    changeStyle(e.srcElement, "#4447");
    uploadFile(e.dataTransfer.files[0]);
})