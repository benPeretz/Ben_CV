$('#myCarousel').carousel({
    interval: 50000,
 })

 

 const observer =new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showAbout');
            
        }else{
            entry.target.classList.remove('showAbout');
        }
    });
} );

const hiddenElement =document.querySelectorAll('.hiddenRightAbout, .hiddenLeftAbout');
hiddenElement.forEach((el) => observer.observe(el));
