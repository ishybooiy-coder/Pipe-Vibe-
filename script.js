document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  
  let name = this.querySelector('input[type="text"]').value;
  let phone = this.querySelector('input[type="tel"]').value;
  let email = this.querySelector('input[type="email"]').value;
  let service = this.querySelector('select').value;
  
  let message = `Hi Leak Fix Plumbers!%0A%0A` +
                `*New Quote Request*%0A` +
                `Name: ${name}%0A` +
                `Phone: ${phone}%0A` +
                `Email: ${email}%0A` +
                `Service: ${service}`;
  
  let whatsappURL = `https://wa.me/27810289821?text=${message}`;
  window.open(whatsappURL, '_blank');
  
  this.reset();
});
const counters = document.querySelectorAll(".counter");

const animateCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 120;

        const update = () => {

            count += increment;

            if(count < target){

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounters();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats"));
// =============================
// SCROLL REVEAL ANIMATION
// =============================


const animatedItems = document.querySelectorAll(
".trust-card, .service-box, .project-card, .stat-box, .review-card, .process-card"
);


const revealObserver = new IntersectionObserver(entries => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{
    threshold:0.15
});


animatedItems.forEach(item=>{

    revealObserver.observe(item);

});
// =============================
// MOBILE MENU
// =============================


const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");


menuToggle.addEventListener("click",()=>{

    mobileMenu.classList.add("active");

});


menuClose.addEventListener("click",()=>{

    mobileMenu.classList.remove("active");

});


// close menu after clicking link

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

});
// ==========================
// FAQ ACCORDION
// ==========================


const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


    const button = item.querySelector(".faq-question");


    button.addEventListener("click",()=>{


        item.classList.toggle("active");


    });


});
// ============================
// BEFORE AFTER SLIDER
// ============================


const slider = document.querySelector(".slider");

const afterImage = document.querySelector(".after-container");


if(slider){

slider.addEventListener("input",()=>{

    afterImage.style.width = slider.value + "%";

});

}