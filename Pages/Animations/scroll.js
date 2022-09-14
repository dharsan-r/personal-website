const scroll = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    var x = window.matchMedia("(max-width: 700px)");
    



    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            nav.classList.toggle('nav-active');

            /*
            str = this.getAttribute('href');
            str = str.substring(1);
            console.log(str);*/
            if(x.matches){
            navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation='';
                }else{
                    link.style.animation = `navLinkFade 0.27s ease forwards ${index /5 + 0.05}s`;
                }
            })
        }
            
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            burger.classList.toggle('toggle');
        });
    });

}



scroll();