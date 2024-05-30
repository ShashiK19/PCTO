
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 16000,
        disableOnInteraction: false,
    },
});



var watch_items = document.querySelectorAll('.observe');


var callback = function(items){
    items.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("in-page");
        }
    });
}

var observer = new IntersectionObserver(callback, {threshold:0.40});

watch_items.forEach((element) =>{
    observer.observe(element);
})

const header = document.getElementById('header');
const infoBar = document.querySelector('.info');

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    if(window.scrollY > 580){
        header.classList.add('active');
        infoBar.classList.add('active');
    }else{
        header.classList.remove('active');
        infoBar.classList.remove('active');  
    }
})


