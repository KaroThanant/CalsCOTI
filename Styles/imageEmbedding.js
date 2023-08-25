let ImageList = ["cali1.jpg", "cali2.jpg", "cali3.jpg", "cali4.jpg", "cali5.jpg", "cali6.jpg", "cali7.jpg", "cali8.jpg", "cali9.jpg",]

var canvas = null;
var imgSrc=null;

var bg = document.createElement("img");
bg.src = "Img/cali.png";

for (i = 1; i < 6; i++) {
    canvas = document.getElementById("canvas" + i);
    console.log("canvas"+i)
    ctx = canvas.getContext('2d');
    imgSrc="Img/ArtGallery/"+ImageList[i]
    

    image = new MarvinImage();
    image.load(imgSrc);
    scaleUpAndDown(image, canvas)

}


function scaleUpAndDown(imageSource, canvas) {
    var img=document.createElement("img");
    img.src = imageSource;
    var bHeight = 400;
    var bWidth = 712;
    var iHeight = image.getHeight();
    var iWidth = image.getWidth();

    var ratioH = iHeight / bHeight;
    var ratioW = iWidth / bWidth;

    // image must be resized so one ratio is 1 and the other is lower than 1. Doesn't matters which one.
    let maxR = Math.max(ratioH, ratioW)
    if (maxR > 1) {
        let ratio = maxR
    } else {
        let ratio = Math.min(ratioH, ratioW)
    }
    var newW = iWidth / maxR;
    var newH = iHeight / maxR;

    let centreH = (bHeight - newH) / 2;
    let centreW = (bWidth - newW) / 2;

    ctx.drawImage(bg, 0, 0, bWidth, bHeight);
    ctx.drawImage(img, centreW, centreH, newW, newH);
    console.log(ctx)
}

function hardEmbed(image, background){
    im = new MarvinImage();
    im.load(image);

    bg = new MarvinImage();
    bg.load(background);

    
}


