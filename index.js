let navbar = document.getElementById('navbar');
let navbarPosition = navbar.getBoundingClientRect().top;



window.addEventListener('scroll', function(){

    let scrollPos = window.scrollY;

    if(scrollPos > navbarPosition){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove('sticky')
    }
})


function greeting(){
    let name = document.getElementById("name-input").value
    alert("Greetings " + name + "! Thank you for checking out my site.")
}