const slides = document.querySelectorAll(".slide");
const main = document.querySelector("main");
let counter = 0;
let count = 241;
const imgUrl = "https://picsum.photos/id/237/1000/500";
slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index * 100}%` 
    }
)
// Trying to solve infinity images------
// let createImg =  ()=>{
//     let img = document.createElement("img");
//     img.classList.add("slide");
//     img.src = `https://picsum.photos/id/${count}/1000/500`;

//     main.appendChild(img);
//     count++;
// }

const goNext = ()=>{
        counter++;
        slideImage();
        // createImg();
        
}
const goPrev= ()=>{
        counter--;
        slideImage();
}
const slideImage = ()=>{
    slides.forEach(
        (val)=>{
            val.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}