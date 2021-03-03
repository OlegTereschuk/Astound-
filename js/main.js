

let sizeItems = document.querySelectorAll(".goods__size-item");

function changeClass() {
    for (let i = 0; i < sizeItems.length; i++) {
        sizeItems[i].className = "goods__size-item";
    }

    this.classList.add("goods__size-item--active");
}

for(let i = 0; i < sizeItems.length; i++) {
    sizeItems[i].onclick = changeClass;
}

//--------------------------

const share = document.querySelector(".goods__share-btn"),
      shareToggle = document.querySelector(".goods__toogle"),
      toggleClose = document.querySelector(".goods__toogle-close");


share.addEventListener('click', function() {
    shareToggle.classList.add('modal-active');
});

toggleClose.addEventListener('click', function() {
    console.log(2);
    shareToggle.classList.add('modal-none');
});


/* slider */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
}