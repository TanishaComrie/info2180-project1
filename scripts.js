/* Add your JavaScript to this file */
window.onload = function(){
    if (document.querySelector('button[type="submit"]')) {
    message();
    }
} 

function message(){
    let e_mail = document.getElementById("email").value;
    if (e_mail == ""){
        alert("Please enter a valid email address.");
    }
    else{
        alert("Thank you! Your email address", value, "has been added to our mailing list!");

    }
}

    

        
        
