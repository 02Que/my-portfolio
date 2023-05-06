/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

function sendEmail() {
    // Get the text from the textarea
    const emailText = document.getElementById("email-text").value;
  
    // Encode the email body as a URL-encoded string
    const body = encodeURIComponent(emailText);
  
    // Set the email address and subject
    const emailAddress = "bulelaniquinton86@gmail.com";
    const subject = "Email from my website";
  
    // Construct the mailto: URL
    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  
    // Open the user's default email client with the prepopulated email
    window.location.href = mailtoUrl;
}
  
showMenu('nav-toggle','nav-menu')
/*changing themes*/
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
/*changing themes*/
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
