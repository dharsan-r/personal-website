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
            console.log(current)
            
        }

    }


    // sections.forEach((section) => {
    //   const sectionTop = section.offsetTop;
    //   if (pageYOffset >= sectionTop) {
    //     current = section.getAttribute("id");
    //     console.log(current)
    //   }
    // });
  
    navLi.forEach((li) => {
      if (li.classList.contains(current)) {
        li.classList.add("current");
        console.log(li.classList)
      }
    });
  });