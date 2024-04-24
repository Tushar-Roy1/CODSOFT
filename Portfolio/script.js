let cvbtn = document.getElementById('btn');
let SubmitBtn = document.getElementById('submit');
let bar= document.getElementById('bar');



cvbtn.addEventListener("click",function(){
    alert("Cv Downloaded Successfully!!!")
});


SubmitBtn.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value=="" && pass.value ==""){
        alert("Fill The Details Properly!")
    }else{
        alert("Message Sent!!")
    }
    
})



let ul = document.querySelector('ul');

bar.addEventListener("click",function(){
    ul.classList.toggle("showData");
    if(ul.className == "showData"){
        bar.className="fa-solid fa-xmark"
    }
    else{
        bar.className="fa-solid fa-bars"
    }
});


ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.main img', { origin:'right' });
ScrollReveal().reveal('.aboutMe', { origin:'left' });
ScrollReveal().reveal('.projects', { origin:'right' });
ScrollReveal().reveal('.service', { origin:'left' });
ScrollReveal().reveal('.contact', { origin:'bottom' });
ScrollReveal().reveal('.footer', { origin:'bottom' });



const typed= new Typed('.multiple-text',{
    strings:['Frontend Developer','Backend Developer','Web Designer','AIML Eng.'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})