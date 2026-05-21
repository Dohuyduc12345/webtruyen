const loginBox = document.getElementById("login_box");
const registerBox = document.getElementById("register-box");
const overlay = document.getElementById("overlay");
const forgetbox = document.getElementById("forget_pass_box");

function openLogin(){
    loginBox.classList.add("active");
    registerBox.classList.remove("active"); 
    forgetbox.classList.remove("active");
    overlay.classList.add("active");
}

function openRegister(){
    registerBox.classList.add("active");
    loginBox.classList.remove("active"); 
    forgetbox.classList.remove("active");
    overlay.classList.add("active");
}

function openForgetbox(){
    forgetbox.classList.add("active");
    loginBox.classList.remove("active"); 
    registerBox.classList.remove("active"); 
    overlay.classList.add("active");

}
function closeAll(){
    loginBox.classList.remove("active");
    registerBox.classList.remove("active");
    forgetbox.classList.remove("active");
    overlay.classList.remove("active");
}

