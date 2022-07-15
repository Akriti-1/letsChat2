function addUser(){
    user= document.getElementById("t").value;
    localStorage.setItem("user", user);
    window.location.replace("select_room.html")
}