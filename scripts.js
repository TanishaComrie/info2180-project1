/* Add your JavaScript to this file */
window.onload = function(){
    message();   
} 

function message(){
    let e_mail = document.forms["email"].value;
    if (x == ""){
        return "Please enter a valid email address.";
    }
    else{
        return "Thank you! Your email address `<example@address.com>` has been added to our mailing list!";

    }
        
}