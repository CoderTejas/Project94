var firebaseConfig = {
    apiKey: "AIzaSyBCAJA2AFw9MBM7CSWANGehNUO9gqV0fGA",
    authDomain: "let-s-chat-web-app-61ef2.firebaseapp.com",
    projectId: "let-s-chat-web-app-61ef2",
    storageBucket: "let-s-chat-web-app-61ef2.appspot.com",
    messagingSenderId: "242157636861",
    appId: "1:242157636861:web:3058989c129d3955b88294"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "let's_chat_page.html";
}