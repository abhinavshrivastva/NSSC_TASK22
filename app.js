let navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    //toggle
    burger.addEventListener('click',()=>{

        nav.classList.toggle('nav-active');







        //animate
    navLinks.forEach((link,index)=> {
        if(link.style.animation)
        {
            link.style.animation='';
        }
        else
        {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +0.5}s`
        }
        
    });

    //burger animation
    
    burger.classList.toggle('toggle');

    });
    
    
}
navSlide();


const modal = document.querySelector(".modal");
        const trigger = document.querySelector(".login_signup");
        // const trigger1 = document.querySelector(".signinelement");
        const closeButton = document.querySelector(".close-button");
        const closeButton2 = document.querySelector(".loginlink");
        function toggleModal() {
            modal.classList.toggle("show-modal");
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }

        // console.log(1);
        trigger.addEventListener("click", toggleModal);
        trigger1.addEventListener("click", toggleModal);
        closeButton.addEventListener("click", toggleModal);
        closeButton2.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);

const login = document.querySelector(".login");
        const trigger_l = document.querySelector(".loginlink");
        const closeButton_l = document.querySelector(".close-button_l");
        function togglelogin_l() {
            login.classList.toggle("show-login");
        }

        function windowOnClick_l(event) {
            if (event.target === login) {
                togglelogin_l();
            }
        }

        trigger_l.addEventListener("click", togglelogin_l);
        closeButton_l.addEventListener("click", togglelogin_l);
        window.addEventListener("click", windowOnClick_l);