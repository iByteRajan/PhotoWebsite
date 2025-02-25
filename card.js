let imgContainers = document.querySelectorAll('.img');
let slider = document.querySelector('.slider');
let close = document.querySelector('.close');
let bg = document.querySelector('.background');
let column1=document.querySelectorAll('.c1p');
let column2=document.querySelectorAll('.c2p');
let column3=document.querySelectorAll('.c3p');
var imgId;


        imgContainers.forEach(imgContainer => {
            imgContainer.addEventListener("click", () => {
                slider.style.display = "block";
                bg.style.opacity = "0.2"; 
                imgId=parseInt(imgContainer.getAttribute("imgId"));
                updateFirstSlide(imgId);
            });
        });




close.addEventListener("click", () => {
    slider.style.display = "none";
    bg.style.opacity = "1";
    bg.style.backgroundColor = ""; 
});


var iterator1=0;
column1.forEach((image)=>{
    image.setAttribute("imgId",iterator1);
    console.log(iterator1);
    iterator1++;
})

var iterator2=iterator1;
column2.forEach((image)=>{
    image.setAttribute("imgId",iterator2);
    console.log(iterator2);
    iterator2++;
})

var iterator3=iterator2;
column3.forEach((image)=>{
    image.setAttribute("imgId",iterator3);
    console.log(iterator3)
    iterator3++;
})






