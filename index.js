function getFormData (e){
    e.preventDefault()  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    const response = document.getElementById("form-contact").innerHTML = "Muito bem " + name + ", sua msg: "
     + ' " ' + msg +  ' ", '  + " foi enviada com sucesso!"
return response
}