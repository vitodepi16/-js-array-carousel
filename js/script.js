/* 
`
<div class="box-img" >
<img src="./img/01.webp" alt="">
</div> 
`
*/
// SECTION IMAGE
const image = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];


// SECTION COSTANTI/VARIABILI

const slide = document.querySelector('slide');
let boxSlide = '';
// CICLI

for (let i = 0; i < image.length; i++){
    boxSlide += ` <div class="box-img" >
    <img src="./${image[i]}" alt="superhero-${i}}">
    </div> 
    `;
    console.log(boxSlide);
}
slide.innerHTML += boxSlide;

// document.querySelectorAll('.box-img');

