let scrollContainer1 = document.querySelector(".third-one-scroll");
let backBtn1 = document.querySelector("#backbtn1");
let nextBtn1 = document.querySelector("#nextbtn1");

nextBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft += 450;
    if(scrollContainer1.scrollLeft >= 450){
        nextBtn1.style.color = "#97b1ff"
        nextBtn1.style.cursor = "default"
    }else {
        backBtn1.style.cursor = "pointer"
        backBtn1.style.color = "#0040ff"
    }
    console.log(scrollContainer1.scrollLeft)
});

backBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = "smooth";
    scrollContainer1.scrollLeft -= 450;
    if(scrollContainer1.scrollLeft <= 449){
        backBtn1.style.cursor = "default"
        backBtn1.style.color = "#97b1ff"
    }else {
        nextBtn1.style.cursor = "pointer"
        nextBtn1.style.color = "#0040ff"
    }
    console.log(scrollContainer1.scrollLeft)
});


let scrollContainer2 = document.querySelector(".third-two-scroll");
let backBtn2 = document.querySelector("#backbtn2");
let nextBtn2 = document.querySelector("#nextbtn2");

nextBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 450;
    if(scrollContainer2.scrollLeft >= 450){
        nextBtn2.style.color = "#97b1ff"
        nextBtn2.style.cursor = "default"
    }else {
        backBtn2.style.cursor = "pointer"
        backBtn2.style.color = "#0040ff"
    }
    console.log(scrollContainer2.scrollLeft)
});

backBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 450;
    if(scrollContainer2.scrollLeft <= 449){
        backBtn2.style.cursor = "default"
        backBtn2.style.color = "#97b1ff"
    }else {
        nextBtn2.style.cursor = "pointer"
        nextBtn2.style.color = "#0040ff"
    }
    console.log(scrollContainer2.scrollLeft)
});


let scrollContainer3 = document.querySelector(".five-one-scroll");
let backBtn3 = document.querySelector("#backbtn3");
let nextBtn3 = document.querySelector("#nextbtn3");

nextBtn3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft += 450;
    if(scrollContainer3.scrollLeft >= 1350){
        nextBtn3.style.color = "#97b1ff"
        nextBtn3.style.cursor = "default"
    }else {
        backBtn3.style.cursor = "pointer"
        backBtn3.style.color = "#0040ff"
    }
    console.log(scrollContainer3.scrollLeft)
});

backBtn3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft -= 450;
    if(scrollContainer3.scrollLeft <= 323){
        backBtn3.style.cursor = "default"
        backBtn3.style.color = "#97b1ff"
    }else {
        nextBtn3.style.cursor = "pointer"
        nextBtn3.style.color = "#0040ff"
    }
    console.log(scrollContainer3.scrollLeft)
});



// --------------------------------------------------------------


mainImg = document.querySelector("#main-img");
showImg1 = document.querySelector("#show-img-1");
showImg2 = document.querySelector("#show-img-2");
showImg3 = document.querySelector("#show-img-3");
showImg4 = document.querySelector("#show-img-4");
showImg5 = document.querySelector("#show-img-5");


showImg1.addEventListener("click", function() {
    mainImg.src = "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/jumpman-mvp-shoes-JV1HCs.png"
});
showImg2.addEventListener("click", function() {
    mainImg.src = "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/432e60d3-724d-4b03-9063-fe712c21704b/jumpman-mvp-shoes-JV1HCs.png"
});
showImg3.addEventListener("click", function() {
    mainImg.src = "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d97678bb-9f78-4df6-a45a-7810508450c7/jumpman-mvp-shoes-JV1HCs.png"
});
showImg4.addEventListener("click", function() {
    mainImg.src = "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cfe79686-a844-4a29-adb2-4442bf989c3c/jumpman-mvp-shoes-JV1HCs.png"
});
showImg5.addEventListener("click", function() {
    mainImg.src = "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/117890a6-97f0-457b-9550-80baf31ea1ea/jumpman-mvp-shoes-JV1HCs.png"
});