const hoverTarget=document.getElementById('oUTROtEXTsEC');
const nature=document.querySelector('.nature');
const all=document.querySelector('.allPhotos');
const sunset=document.querySelector('.sunset');
const artPainting=document.querySelector('.artPainting');
const college=document.querySelector('.college');
const random=document.querySelector('.random');

hoverTarget.addEventListener('mouseenter',()=>{
    hoverTarget.classList.add('hovered');
})
  

all.addEventListener("click",()=>{
    window.location.href="allPhotos.html";
})
sunset.addEventListener("click",()=>{
    window.location.href="sunset.html";
})
nature.addEventListener("click",()=>{
    window.location.href="nature.html";
})

// college.addEventListener("click",()=>{
//     window.location.href="college.html";
// })
artPainting.addEventListener("click",()=>{
    window.location.href="artPainting.html";
})

random.addEventListener("click",()=>{
    window.location.href="random.html";
}) 







