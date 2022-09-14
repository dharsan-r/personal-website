const test = () => {
    


    // var body = document.body,
    // html = document.documentElement;

    // var height = Math.max( body.scrollHeight, body.offsetHeight, 
    //                    html.clientHeight, html.scrollHeight, html.offsetHeight );
    // console.log(height)

    
    // console.log('h');

    const volunteer = document.querySelector('.no-hover2');
    const volunteer1 = document.querySelector('.no-hover2 span a');
    var styleElem1 = document.head.appendChild(document.createElement("style"));

    
    const exp = document.querySelector('.no-hover');
    const exp1 = document.querySelector('.no-hover span a');
    var styleElem2 = document.head.appendChild(document.createElement("style"));

    var title = document.querySelector('.top');
    var title1 = document.querySelector('.page-title2');
    let pos = title1.getBoundingClientRect().bottom - 20;
    let pos2 = title.getBoundingClientRect().bottom/1.5;
    
    



    console.log('xsadasdhakjljd');
    console.log(pos2);
    console.log('xsadasdhakjljd');



    var j = pos;

    let lastKnownScrollPosition = 0;
    let ticking = false;

    document.addEventListener('scroll', (e) => {
        lastKnownScrollPosition = window.scrollY;
      
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if(lastKnownScrollPosition >=pos){
                volunteer.style.pointerEvents="none";
                volunteer1.style.color = "black";
                styleElem1.innerHTML = ".no-hover2 span a::after {transition: 0.3s; background: blue;}";
                
                exp.style.pointerEvents="all";
                exp1.style.color = "#757575";
                styleElem2.innerHTML = ".no-hover span a::after {transition: 0.3s; background: none;}";
            
            
            }else if (lastKnownScrollPosition < pos2){
                exp.style.pointerEvents="none";
                exp1.style.color = "black";
                styleElem2.innerHTML = ".no-hover span a::after {transition: 0.3s; background: blue;}";
                volunteer.style.pointerEvents="all";
                volunteer1.style.color = "#757575";
                styleElem1.innerHTML = ".no-hover2 span a::after {transition: 0.3s; background: none;}";
            }
            console.log(lastKnownScrollPosition);
            ticking = false;
          });
      
          ticking = true;
        }
      });



}

test();