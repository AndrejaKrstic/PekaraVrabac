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


$(function(){
    var $registar = $("#forma");
    $.validator.addMethod("razmaci", function(value, element){
        return value == '' || (value.trim().length == value.length)
    }, "Razmaci nisu dozvoljeni!");
    if($registar.length){
        $registar.validate({
            rules:{
                ime:{
                    required: true,
                    razmaci: true
                },
                prezime:{
                    required: true,
                    razmaci: true
                },
                mejl:{
                    required: true,
                    email: true
                },
                pozicija:{
                    required: true
                },
                motivaciono:{
                    required: true
                }
            },
            messages:{
                ime:{
                    required: 'Ime je obavezno!'
                },
                prezime:{
                    required: 'Prezime je obavezno!'
                },
                mejl:{
                    required: 'E-mail adresa je obavezna!',
                    email: 'Unesite validan e-mail!'
                },
                pozicija:{
                    required: 'Molimo Vas unesite željenu poziciju.'
                },
                motivaciono:{
                    required: 'Molimo Vas popunite motivaciono pismo.'
                }

            }
            
        })
    }
})