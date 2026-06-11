const container = document.getElementById("image-container");
const img = document.createElement("img");
const img_to_str ={
    0: "selector.png",
    1: "font-size.png",
    2: "main-black.png",
    3: "main-white.png",
    4: "any-font.png"
};
let cur_img = 0;
img.src = "/chemistry-record/Images/selector.png"
img.alt = ""
container.appendChild(img)

function update_image(cur_img){
    container.removeChild(container.lastChild);
    cur_img += 1;
    cur_img %= 5;
    img.src = `/chemistry-record/Images/${img_to_str[cur_img]}`
    img.alt = ""
    container.appendChild(img)
    return cur_img
}

const intervalId = setInterval(() => {
    cur_img = update_image(cur_img);
    console.log(cur_img);
}, 3750);
