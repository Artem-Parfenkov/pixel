let grid = document.querySelector(".grid")
for (let i = 0;i < 800; i += 1){
    let doc = document.createElement("div")
    doc.classList.add("doc")
    doc.style.backgroundColor = "#FF33FF"
    grid.appendChild(doc)
}
let color = document.querySelectorAll(".color")
let COLORS = ["black","white","blue","red","green"]
let CURENT_COLOR = "magenta"
for (let i = 0; i < COLORS.length;i++){
    color[i].addEventListener("click",function(){
        CURENT_COLOR = COLORS[i]
        console.log(CURENT_COLOR)

    })}
let IS_CLICKED = false
document.addEventListener("mousedown",function(){
    IS_CLICKED = true
})
document.addEventListener("mouseup",function(){
    IS_CLICKED = false
})
let docs = document.querySelectorAll(".doc")
for (let i = 0; i < docs.length;i++){
    docs[i].addEventListener("mouseover",function(){
        if (IS_CLICKED){
            docs[i].style.backgroundColor = CURENT_COLOR
        }
    });
    docs[i].addEventListener("mousedown",function(){
        docs[i].style.backgroundColor = CURENT_COLOR
    })
}
document.querySelector('.eraser').addEventListener("click",function(){
    CURENT_COLOR = "#FF33FF"
})
document.querySelector('.button').addEventListener("click",function(){
    domtoimage.toJpeg(grid, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})
