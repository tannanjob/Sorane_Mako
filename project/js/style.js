const myFunc = () => {
    let elem = document.getElementById("content-wrapper");
    let wh = window.innerHeight;
    let ww = window.innerWidth;
    elem.style.height = wh + "px";
    elem.style.width = ww + "px";
}
const resizeImage = (img, box) => {
    var targetImg = document.getElementById(img);
    var targetBox = document.getElementById(box);
    var ix = targetImg.getBoundingClientRect().width;  // 画像の元の横幅を保存
    var iy = targetImg.getBoundingClientRect().height; // 画像の元の高さを保存
    var by = targetBox.getBoundingClientRect().height;
    var bx = targetBox.getBoundingClientRect().width;

    //横長の時
    if (bx / by > 1) {
        ix = ix * (by / iy);
        iy = by;

    }
    //縦長の時
    else {
        iy = iy * (bx / ix);
        ix = bx;
    }

    if(ix == 0){
        ix = iy;
    }
    targetImg.width = ix;
    targetImg.height = iy;
}

window.addEventListener("load", myFunc, false);
window.addEventListener("load", resizeImage('top-icon-image', 'top-icon'), false);
window.addEventListener("load", resizeImage('down-icon-image', 'down-icon'), false);

window.addEventListener("resize", myFunc, false);
window.addEventListener("resize", resizeImage('top-icon-image', 'top-icon'), false);
window.addEventListener("resize", resizeImage('down-icon-image', 'down-icon'), false);

// 'top-icon-image'
// 'top-icon'