const sr = new ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 150,
    });


    sr.reveal('.header-text, .about-me-p, .tab-contents.active-tap, .header-welcome, .work-list, .contact-row',{}); 
    // sr.reveal('.header-text, .about-me-p, .tab-contents.active-tap, .header-welcome, .services-list, .work-list, .contact-row',{}); 
    sr.reveal('.home__img, .subtitle, .tab-links.active-link',{delay: 400}); 
    
    sr.reveal('.social-icons',{ interval: 200}); 
    sr.reveal('.btn, .btn.btn2',{interval: 100}); 



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