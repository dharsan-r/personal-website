const sections = document.querySelectorAll(".anchor");
const sections2 = document.querySelectorAll(".anchorb");
const navLi = document.querySelectorAll("header ul li");




window.addEventListener("scroll", () => {
    let current = "";

    for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        const sectionBot = sections2[i].offsetTop;

        
        if (pageYOffset >= sectionTop && pageYOffset <=sectionBot) {
            current = sections[i].getAttribute("id");
        }else if(pageYOffset<sections[1].offsetTop){
          current = sections[0].getAttribute("id");
        }

    }


  
    navLi.forEach((li) => {
      
      // console.log(current)
      li.classList.remove("current");
      if (li.classList.contains(current)) {
        li.classList.add("current");
      }
    });

});

