const navSlide = () =>{
    const fon = document.querySelector('.fon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    fon.addEventListener('click',()=>{

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0.2}s`;
            }
            
        });
        //animacija ikonice menija
        fon.classList.toggle(`toggle`);

    });

   
}


navSlide();

var n = (new Date()).toLocaleDateString('uk-UK');
document.getElementById("datum").innerHTML = n;


var span = document.getElementById('vreme');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m + ":" + s;
  if(s<10 && m<10){
    span.textContent = h + ":0" + m + ":0" + s;
  }else if(s<10 && m>9){
    span.textContent = h + ":" + m + ":0" + s;
  }else if(s>9 && m<10){
    span.textContent = h + ":0" + m + ":" + s;
  }
  
}

setInterval(time, 1000);
