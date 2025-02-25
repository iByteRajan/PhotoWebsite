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








// https://images.unsplash.com/photo-1740219148636-824ab17bdd57?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8
// https://images.unsplash.com/photo-1724271362937-391a150db603?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1732445027511-4a6cde297c31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1735276680702-c008c8035c18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1735657090766-0fa0a6e45be7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1738096294977-3bf7225f9a6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1740378381628-966bf4b5c104?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1740341459122-cc16499650bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1737498352683-66b56fcc808b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1740165886249-ec4b5785acf4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1740165886179-c2be3d6447ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1740131971089-8f46b62c18d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDV8fHxlbnwwfHx8fHw%3D
// https://plus.unsplash.com/premium_photo-1738779001505-e68aad639b8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzR8fHxlbnwwfHx8fHw%3D
// https://plus.unsplash.com/premium_photo-1738935667717-75777a3aaf71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjZ8fHxlbnwwfHx8fHw%3D
// https://plus.unsplash.com/premium_photo-1676838268294-81548389a7fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzh8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1739900292622-a7f860175aad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTF8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1739932215415-749539619bfb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTd8fHxlbnwwfHx8fHw%3D
// https://plus.unsplash.com/premium_photo-1738847400430-de5eabe7e6f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNjJ8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1739219959019-dd317f76c7e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNzd8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1738683987578-e8a796a9de27?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNzV8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1739382122868-841cb1e669df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMDN8fHxlbnwwfHx8fHw%3D
// https://images.unsplash.com/photo-1739609439850-2eace0b03218?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzODl8fHxlbnwwfHx8fHw%3D