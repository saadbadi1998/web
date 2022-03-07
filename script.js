var brightness = document.getElementById('brightness-slider');
var contrast = document.getElementById('contrast-slider');
var hue = document.getElementById('hue-slider');
var blur = document.getElementById('blur-slider');
var saturation = document.getElementById('saturation-slider');
var sepia = document.getElementById('sepia-slider');
var img = document.getElementById('img');

function search_img() {
    let inputURL = document.getElementById('search-box');
    if(!inputURL.value){
        return;
    }
    img.src = inputURL.value;
    setDefaultValue();
    setTimeout(() => {
        inputURL.value = "";
    }, 10);

}


function updateImage() {

    let val = `brightness(${brightness.value}%)` + ' ' + `contrast(${contrast.value}%)` + ' ' + `blur(${blur.value}px)` + ' ' + ' ' + `hue-rotate(${hue.value}deg)` + ' ' + `saturate(${saturation.value}%)` + ' ' + `sepia(${sepia.value}%)`;

    img.style.filter = val;



}

function setDefaultValue() {
    brightness.value = 100;
    contrast.value = 100;
    hue.value = 0;
    blur.value = 0;
    saturation.value = 100;
    sepia.value = 0;
    updateImage();

}