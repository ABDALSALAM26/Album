let images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg"

];

let img = document.getElementById("image");

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let slide = document.getElementById("slide");
let stop = document.getElementById("stop");

let index = 0;
let timer;

next.onclick = function () {

    index++;

    if(index == images.length){
        index = 0;
    }

    img.src = images[index];
}

previous.onclick = function () {

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    img.src = images[index];
}

slide.onclick = function () {


    timer = setInterval(function(){

        index++;

        if(index == images.length){
            index = 0;
        }

        img.src = images[index];

    },1000);

}

stop.onclick = function(){

    clearInterval(timer);

}

let boxes = document.querySelectorAll("span");
boxes.forEach(addClick);

function addClick(box) {

    box.onclick = function () {

        let copy = this.cloneNode(true);

        document.querySelector(".container").append(copy);

        this.onclick = null;
        addClick(copy);

    };

}