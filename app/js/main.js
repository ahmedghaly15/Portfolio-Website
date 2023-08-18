const sr = new ScrollReveal({
    // origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
    });


    sr.reveal('.hello, .header-text, .tab-links.active-link, .subtitle', { origin:'top' })

    sr.reveal('.services-list, .work-list, .contact-row, .tab-contents.active-tap, .social-icons, .btn, .btn.btn2, .btn.submit', { origin:'bottom' }); 
    
    sr.reveal('.hello h1, .about-img, .contact-left', { origin:'left' }); 
    sr.reveal('.about-me-p, .home__img, .contact-right', { origin:'right' }); 



    // ======== Show & Close Side Menu =========
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    
    // ========= Toggle Among Tabs' Contents =========
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentap(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tap");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tap");
    }


    // ========== Send Message To Google Sheet ===========
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSO6pHD2hwi2BnJVKWaoG1-LYt0KoYAfGGyI4S9JHwWAJA7UUmUpDUpv0agOxIR_I/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


    // ========== Scroll to Top Button ===========
    var scrollTopBtn = document.getElementById("scroll-top-btn");

    window.onscroll = function() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
    };

    scrollTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    });

    const typed = new Typed('.multiple-text',{
        strings: ['Flutter Developer', 'Mobile App Developer'],
        typeSpeed:100,
        backSpeed:120,
        delay:1000,
        loop:true
    });