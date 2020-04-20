/* --------------------------------- form ---------------------------------*/
function getFormData (e){
    e.preventDefault()  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    const response = document.getElementById("form-contact").innerHTML = "Muito bem " + name + ", sua msg: "
     + ' " ' + msg +  ' ", '  + " foi enviada com sucesso!"
return response
}



/* --------------------------------- animação scroll ---------------------------------*/

const target = document.querySelectorAll('[data-animate]');
const animationClass = 'animate'

function animeScroll(){
const windowTop = window.pageYOffset +  (window.innerHeight * 3) / 4 ;
target.forEach(function(element){
   if((windowTop) > element.offsetTop){
       element.classList.add(animationClass)
       console.log(element.offsetTop)
   } else{
       element.classList.remove(animationClass)
   }
})
}
window.addEventListener('scroll', function(){
    animeScroll();
}
)