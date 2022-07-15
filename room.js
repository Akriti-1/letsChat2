user_name= "Welcome "+ localStorage.getItem("user") +"!";
document.getElementById("welcome").innerHTML= user_name;

const firebaseConfig = {
    apiKey: "AIzaSyBSIIKi5yHhJNoNWnL_qVu04ghiQq9WJvE",
    authDomain: "lets-chat-7d019.firebaseapp.com",
    databaseURL: "https://lets-chat-7d019-default-rtdb.firebaseio.com",
    projectId: "lets-chat-7d019",
    storageBucket: "lets-chat-7d019.appspot.com",
    messagingSenderId: "926864401476",
    appId: "1:926864401476:web:7cfa70b73b0b2d66ea4811",
    measurementId: "G-5NR8Q8VWWB"
  };

  firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("user");
    window.location.replace("index.html");
}