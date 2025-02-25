const slides=document.querySelectorAll(".slide");
const totalImages=slides.length;
var counter;

const updateFirstSlide=(imgId)=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${(imgId)*100}%)`
    })
    counter=imgId;
}


slides.forEach((slide,index) => {
    slide.style.left=`${index*100}%`;
});

const goNext=()=>{
    if(counter===(totalImages-1)){
        counter=0;
        slideImage();
    }
    else{
        counter++;
        slideImage();
    }
}
const goPrevious=()=>{
    if(counter===0){
        counter=totalImages-1;
        slideImage();
    }
    else{
        counter--;
        slideImage();
    }
}

const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}

