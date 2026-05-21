function openRegister(){
    document.getElementById("register-box").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeAll(){
    document.getElementById("register-box").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}