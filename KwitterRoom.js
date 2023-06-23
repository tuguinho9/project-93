var username = localStorage.getItem("username");
document.getElementById("bemvindo").innerHTML = "Bem Vindo " + username;
const firebaseConfig = {
    apiKey: "AIzaSyDiD6-G3MsDhhUWhrf7M4uPS8dnets4uTQ",
    authDomain: "kwitter-a1770.firebaseapp.com",
    databaseURL: "https://kwitter-a1770-default-rtdb.firebaseio.com",
    projectId: "kwitter-a1770",
    storageBucket: "kwitter-a1770.appspot.com",
    messagingSenderId: "597942560935",
    appId: "1:597942560935:web:ece6f262d1b891f1145382"
  };
  firebase.initializeApp(firebaseConfig);
  function enviar() {
    var sala = document.getElementById("usuario").value;
    firebase.database().ref("/").child(sala).update({
        purpose: "Adicionar sala"
    });
    localStorage.setItem("sala", sala);
    window.location("KwitterPage.html");
  }