let bannerText = "Page currently in progress, thank you for your visit !";


function setBannerText(){
    input = document.getElementById('newBannerText')
    bannerText = input.value
}

function displayBannerText(){
    banner = document.getElementById('banner')
    banner.innerHTML = bannerText;
    return 1;
}

displayBannerText()