// import firebase from 'firebase/app';
// const firebase = require("firebase");
// require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyCkWwIL21hRXFk5k9X1_vI-NgxaUMsZAE8",
    authDomain: "todoos07.firebaseapp.com",
    projectId: "todoos07",
    storageBucket: "todoos07.appspot.com",
    messagingSenderId: "136111983255",
    appId: "1:136111983255:web:607f79a0fdc00866c8f7d2"
  };
  firebase.initializeApp(firebaseConfig);

var names,username,email,pass,pass1,names_1,pass_1,task;
function read(){
    names = document.getElementById('name').value;
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    pass = document.getElementById('pass').value;
    pass1 = document.getElementById('pass1').value;
}
// function go(){
//     insert();
//     window.location.href = "home.html";
// }
var j = 0;
function insert(){
    read();
    if(pass != pass1){
        if(!alert("Passwords doesn't match")){window.location.reload();}     
    }
    else{
        firebase.database().ref('users/'+names).set({
            Id: j,
            NameOfUser: names,
            UserName: username,
            Email: email,
            Password: pass
        });
        firebase.database().ref('id').set({
            Id: names
        })
        j++;
        alert("Successfully registered click on sign up below");
    }
}
function get(){
    var password,user_1;
    login();
    // var s_name = names;
    firebase.database().ref('users/'+names_1).on('value',function(snapshot){
        password = snapshot.val().Password;
        user_1 = snapshot.val().UserName;
        document.getElementById("session").innerHTML = snapshot.val().NameOfUser;
        // $("#session").append(user_1);
    });
    console.log("The passwords are : "+password+" - "+pass_1);
    if(password == pass_1){
        window.location.href = "home.html";
        // var u = prompt("Enter your Name");
        // var p = prompt("Enter your password");
    }
    else{
        alert('Incorrect Username/Password');
    }
}
function login(){
    names_1 = document.getElementById('name-1').value;
    pass_1 = document.getElementById('pass-1').value;
}

function logout(){
    window.location.href = "index.html";
}
function readTask(){
    task = document.getElementById('title1').value;
}
var i = 0;
// login();
// console.log("The usernmae is : "+names_1);
