const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        
        //animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.27s ease forwards ${index /5 + 0.05}s`;
            }
        })

        //burger ani
        burger.classList.toggle('toggle');
    })
}   

navSlide();